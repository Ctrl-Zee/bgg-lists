import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { LocalUser } from '../models/LocalUser';

type UserStore = LocalUser & {
  setUser: (user: LocalUser) => void;
  clearUser: () => Promise<void>;
};

const initialState: LocalUser = {
  id: '',
  email: '',
  bggName: '',
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      ...initialState,

      setUser: (user: LocalUser) => {
        set({ ...user });
      },
      clearUser: async () => {
        set(initialState);
      },
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Selector hooks for better performance
export const useUserId = () => useUserStore((state) => state.id);
export const useUserEmail = () => useUserStore((state) => state.email);

// Helper hook for full profile
export const useUserProfile = () => {
  const { id, email, name } = useUserStore();
  return { id, email, name };
};
