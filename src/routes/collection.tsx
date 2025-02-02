import { createFileRoute } from '@tanstack/react-router';
import { useUserCollection } from '../features/user-collection/hooks/useUserCollection';
import { Card, CardSection, Image } from '@mantine/core';

export const Route = createFileRoute('/collection')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useUserCollection();

  return (
    // todo: style list
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
  );
}
