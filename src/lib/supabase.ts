import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export interface Profile {
  id: string;
  email: string;
  disclaimer_accepted: boolean;
  disclaimer_accepted_at: string | null;
  created_at: string;
}

export interface Bot {
  id: string;
  user_id: string;
  name: string;
  market_type: 'spot' | 'futures';
  coin: string;
  strategy: 'scalping' | 'grid' | 'trailing';
  status: 'running' | 'paused' | 'idle';
  profit_loss: number;
  created_at: string;
}

export interface TradeHistory {
  id: string;
  user_id: string;
  timestamp: string;
  pair: string;
  side: 'BUY' | 'SELL';
  amount: number;
  price: number;
  pnl: number;
  strategy: string | null;
}

export interface BrokerKey {
  id: string;
  user_id: string;
  exchange_name: string;
  api_key: string;
  api_secret: string;
  is_connected: boolean;
  created_at: string;
}
