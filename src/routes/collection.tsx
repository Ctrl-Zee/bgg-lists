import { createFileRoute } from '@tanstack/react-router';
import { useUserCollection } from '../features/user-collection/hooks/useUserCollection';

export const Route = createFileRoute('/collection')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useUserCollection();
  console.log(data);
  return (
    <div>{data?.games.map((game) => <div key={game.id}>{game.name}</div>)}</div>
  );
}
