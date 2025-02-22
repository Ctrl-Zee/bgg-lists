import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Button } from '@mantine/core';
import { supabase } from '../supabaseClient';
import { requireAuth } from '../utils/auth';
import { useUserStore } from '../stores/UserStore';
import { SortableList } from '../features/user-collection/components/SortableList';
import { CollectionQueryOptions } from '../features/user-collection/utils/CollectionQueryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';

export const Route = createFileRoute('/collection')({
  beforeLoad: async () => {
    await requireAuth();
  },
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(CollectionQueryOptions),
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const userStore = useUserStore();
  const { data } = useSuspenseQuery(CollectionQueryOptions);
  const items = data.games.map((game) => game.name);

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
