import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/account')({
  component: RouteComponent,
});

function RouteComponent() {
  // TODO: Implement me!
  return <div>Hello "/account"!</div>;
}
