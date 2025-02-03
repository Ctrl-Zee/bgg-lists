import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useUserCollection } from '../features/user-collection/hooks/useUserCollection';
import { Button, Card, CardSection, Image } from '@mantine/core';
import { supabase } from '../supabaseClient';
import { requireAuth } from '../utils/auth';

export const Route = createFileRoute('/collection')({
  beforeLoad: async () => {
    await requireAuth();
  },
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { data } = useUserCollection();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
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
      <div>
        {data?.games.map((game) => (
          <Card key={game.id}>
            <CardSection>
              <Image
                src={game.imageUrl}
                alt={game.name}
                h={100}
                w={100}
                radius="md"
              />
            </CardSection>
          </Card>
        ))}
      </div>
    </>
  );
}
