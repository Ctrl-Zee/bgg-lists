import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useUserCollection } from '../features/user-collection/hooks/useUserCollection';
import { Button, Card, CardSection, Image } from '@mantine/core';
import { supabase } from '../supabaseClient';
import { requireAuth } from '../utils/auth';
import { useUserStore } from '../stores/UserStore';
import { SortableList } from '../features/user-collection/components/SortableList';

export const Route = createFileRoute('/collection')({
  beforeLoad: async () => {
    await requireAuth();
  },
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const userStore = useUserStore();
  const { data } = useUserCollection();
  const items = data?.games.map((game) => game.name) ?? [];

  const handleReorder = (items: string[]) => {
    console.log(items);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    await userStore.clearUser();
    if (error) {
      throw error;
    }
    navigate({ to: '/login' });
  };

  return (
    <>
      <Button size="compact-md" onClick={handleLogout}>
        Logout
      </Button>

      <SortableList onReorder={handleReorder} initialItems={items} />
    </>
  );
}
