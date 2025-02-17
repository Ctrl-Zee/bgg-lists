import { redirect } from '@tanstack/react-router';
import { supabase } from '../supabaseClient';

export const isAuthenticated = async () => {
  const { data } = await supabase.auth.getSession();
  return !!data.session;
};

export const requireAuth = async () => {
  const hasSession = await isAuthenticated();
  if (!hasSession) {
    throw redirect({
      to: '/login',
    });
  }
};
