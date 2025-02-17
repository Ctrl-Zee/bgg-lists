import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { UserCollection } from '../../../types/UserCollection';

export const useUserCollection = () => {
  return useQuery({
    queryKey: ['userCollection'],
    queryFn: async () => {
      const { data } = await axios.get<UserCollection>(
        'http://localhost:5191/api/List/UserCollection'
      );
      return data;
    },
  });
};
