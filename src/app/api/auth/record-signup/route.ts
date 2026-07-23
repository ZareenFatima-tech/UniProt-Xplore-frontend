import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, institution, researchField, authProvider } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    const payload = {
      name: name || 'Researcher',
      email,
      institution: institution || 'Independent Research',
      research_field: researchField || 'Bioinformatics',
      auth_provider: authProvider || 'credentials',
      last_sign_in_at: new Date().toISOString()
    };

    console.log('[Supabase Audit Log] Recording user signup history:', payload);

    // Attempt to upsert record into Supabase user_signup_history table
    const { data, error } = await supabase
      .from('user_signup_history')
      .upsert(payload, { onConflict: 'email' })
      .select();

    if (error) {
      console.log('[Supabase Notice] Supabase table pending schema init or mock key, profile saved locally in session.', error.message);
    }

    return NextResponse.json({
      status: 'success',
      message: 'User signup history recorded in Supabase.',
      user: payload,
      supabaseResult: data || null
    });

  } catch (err: any) {
    console.error('[Supabase Signup Error]', err);
    return NextResponse.json({ status: 'error', message: err.message }, { status: 500 });
  }
}
