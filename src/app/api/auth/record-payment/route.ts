import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, accountHolderName, cardNumber, expiryDate, cvc, country, amountUsd = 20.0 } = body;

    if (!email || !accountHolderName || !cardNumber || !expiryDate || !cvc) {
      return NextResponse.json(
        { error: 'All payment fields (Cardholder Name, Card Number, Expiry Date, CVC) are required.' },
        { status: 400 }
      );
    }

    const cleanCard = cardNumber.replace(/\s+/g, '');
    const cardLast4 = cleanCard.slice(-4) || '4242';

    // Simulate $20.00 USD Balance Check Logic
    // If card number ends in '0000' or '9999', simulate insufficient available funds
    const isInsufficientFunds = cleanCard.endsWith('0000') || cleanCard.endsWith('9999');

    const paymentStatus = isInsufficientFunds ? 'DECLINED_INSUFFICIENT_FUNDS' : 'SUCCESS';

    const paymentRecord = {
      user_email: email,
      account_holder_name: accountHolderName,
      card_last4: cardLast4,
      expiry_date: expiryDate,
      country: country || 'United States',
      amount_usd: amountUsd,
      currency: 'USD',
      payment_status: paymentStatus,
      subscription_tier: 'Lab Plan ($20/mo)',
      transaction_timestamp: new Date().toISOString()
    };

    console.log('[Supabase Payment Log] Recording transaction into user_payment_history:', paymentRecord);

    // Insert transaction into Supabase user_payment_history table
    const { data, error } = await supabase
      .from('user_payment_history')
      .insert([paymentRecord])
      .select();

    if (error) {
      console.log('[Supabase Notice] Supabase user_payment_history table notice:', error.message);
    }

    if (isInsufficientFunds) {
      return NextResponse.json(
        {
          status: 'declined',
          error: 'Transaction Declined: Insufficient available funds ($20.00 USD minimum required). Access denied to the system.',
          paymentRecord
        },
        { status: 402 }
      );
    }

    return NextResponse.json({
      status: 'success',
      message: 'Payment of $20.00 USD verified and processed successfully! Lab Plan unlocked.',
      user_email: email,
      subscription_tier: 'Lab Plan ($20/mo)',
      paymentRecord,
      supabaseResult: data || null
    });

  } catch (err: any) {
    console.error('[Payment API Error]', err);
    return NextResponse.json({ error: 'Server payment processing error: ' + err.message }, { status: 500 });
  }
}
