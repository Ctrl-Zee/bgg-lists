import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../../supabaseClient';
import { Tables } from '../../../db/database.types';

export const useAccountInfo = (userId: string | undefined) => {
  return useQuery({
    queryKey: ['accountInfo'],
    queryFn: async () => {
      const { data } = await supabase
        .from('profile')
        .select('*')
        .eq('id', userId ?? '');
      const profile: Tables<'profile'> | undefined = data ? data[0] : undefined;
      return profile;
    },
    enabled: !!userId,
  });
};
