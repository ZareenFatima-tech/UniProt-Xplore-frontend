'use client';

import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, AlertTriangle, CheckCircle } from 'lucide-react';
import { activateLabPlanSubscription } from '../../lib/quotaManager';
import Button from './Button';
import Input from './Input';
import Select from './Select';

interface InternationalPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  userEmail?: string;
}

const countryOptions = [
  { value: 'United States', label: 'United States (USD $)' },
  { value: 'United Kingdom', label: 'United Kingdom (GBP £ / USD $)' },
  { value: 'Germany', label: 'Germany (EUR € / USD $)' },
  { value: 'Canada', label: 'Canada (CAD $ / USD $)' },
  { value: 'Japan', label: 'Japan (JPY ¥ / USD $)' },
  { value: 'Pakistan', label: 'Pakistan (PKR / USD $)' },
  { value: 'Australia', label: 'Australia (AUD $ / USD $)' },
  { value: 'Other', label: 'International (USD $)' }
];

export const InternationalPaymentModal: React.FC<InternationalPaymentModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  userEmail = 'researcher@institution.edu'
}) => {
  const [accountHolderName, setAccountHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [country, setCountry] = useState('United States');
  const [emailInput, setEmailInput] = useState(userEmail);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await fetch('/api/auth/record-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailInput || 'researcher@institution.edu',
          accountHolderName,
          cardNumber,
          expiryDate,
          cvc,
          country,
          amountUsd: 20.0
        })
      });

      const json = await res.json();

      if (!res.ok || json.status === 'declined') {
        setErrorMsg(json.error || 'Transaction Declined: Insufficient available funds ($20.00 USD required). Access denied.');
        setLoading(false);
        return;
      }

      // Success: Unlock Lab Plan
      activateLabPlanSubscription();
      setSuccessMsg('Payment of $20.00 USD Verified! Lab Plan Unlocked.');
      setLoading(false);

      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1200);

    } catch (err: any) {
      setErrorMsg('Payment verification failed: ' + err.message);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0F3A33] border border-[#4A6572]/40 rounded-3xl p-6 sm:p-8 text-[#E3E9E8] shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#E3E9E8]/60 hover:text-[#E3E9E8] hover:bg-[#0B2B26] transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex flex-col gap-2 border-b border-[#4A6572]/30 pb-4 mb-6">
          <div className="flex items-center gap-2 text-[#4FD1C5]">
            <CreditCard size={22} />
            <h3 className="text-xl font-display font-extrabold text-[#E3E9E8]">
              International Payment Gateway
            </h3>
          </div>
          <p className="text-xs text-[#E3E9E8]/80 font-sans leading-relaxed">
            Upgrade to <span className="text-[#4FD1C5] font-bold">Lab Plan ($20.00 USD/mo)</span> to unlock unlimited protein analyses & FASTA/PDF scientific report exports.
          </p>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-4 mb-5 rounded-2xl bg-[#F87171]/10 border border-[#F87171]/40 text-[#F87171] text-xs flex items-start gap-3">
            <AlertTriangle size={18} className="shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="font-bold">Access Denied (Declined)</span>
              <p className="leading-relaxed">{errorMsg}</p>
            </div>
          </div>
        )}

        {/* Success Alert */}
        {successMsg && (
          <div className="p-4 mb-5 rounded-2xl bg-[#4FD1C5]/10 border border-[#4FD1C5]/40 text-[#4FD1C5] text-xs flex items-center gap-3 font-bold">
            <CheckCircle size={18} />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handlePayment} className="flex flex-col gap-4 text-xs font-sans">
          
          <Input
            id="emailInput"
            label="Account Email Address"
            type="email"
            placeholder="name@institution.edu"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />

          <Input
            id="accountHolderName"
            label="Account / Cardholder Name"
            type="text"
            placeholder="Dr. Evelyn Carter"
            value={accountHolderName}
            onChange={(e) => setAccountHolderName(e.target.value)}
            required
          />

          <Input
            id="cardNumber"
            label="Card Number (International Visa / Mastercard / AMEX)"
            type="text"
            placeholder="4242 4242 4242 4242"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              id="expiryDate"
              label="Expiry Date (MM/YY)"
              type="text"
              placeholder="08/28"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />

            <Input
              id="cvc"
              label="CVC / CVV"
              type="password"
              placeholder="123"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              required
            />
          </div>

          <Select
            id="country"
            label="Billing Country / Region"
            options={countryOptions}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          {/* Amount Badge */}
          <div className="p-3.5 rounded-2xl bg-[#0B2B26] border border-[#4A6572]/30 flex items-center justify-between mt-1">
            <span className="text-[#E3E9E8]/80 text-xs font-sans">Total Due Today:</span>
            <span className="font-mono font-bold text-lg text-[#4FD1C5]">$20.00 USD</span>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <Button type="submit" disabled={loading} className="w-full text-center py-3.5 min-h-[48px] font-bold text-sm">
              {loading ? 'Verifying $20.00 USD Funds...' : 'Authorize & Pay $20.00 USD'}
            </Button>
            
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#E3E9E8]/60 font-mono mt-1">
              <ShieldCheck size={14} className="text-[#4FD1C5]" />
              <span>256-bit Encrypted International Payment • Saved to Supabase</span>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};

export default InternationalPaymentModal;
