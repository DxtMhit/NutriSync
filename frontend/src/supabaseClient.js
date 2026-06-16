import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase configuration missing! " +
    "Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file in the frontend/ directory."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
