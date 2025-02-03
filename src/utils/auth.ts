import { redirect } from '@tanstack/react-router';
import { supabase } from '../supabaseClient';

export const isAuthenticated = async () => {
  const { data } = await supabase.auth.getSession();
  return !!data.session;
};

export const requireAuth = async () => {
  const hasSession = await isAuthenticated();
  console.log(hasSession);
  if (!hasSession) {
    throw redirect({
      to: '/login',
    });
  }
};
