import { createClient } from '@supabase/supabase-js';

// Remove barras no final ou caminhos como /rest/v1 caso tenham vindo na cópia
const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const cleanUrl = rawUrl.trim().replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

export const supabase = createClient(cleanUrl, supabaseAnonKey);