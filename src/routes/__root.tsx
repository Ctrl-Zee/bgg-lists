import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { RootLayout } from '../layouts/RootLayout';
import { QueryClient } from '@tanstack/react-query';

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <RootLayout>
        <Outlet />
      </RootLayout>
      <TanStackRouterDevtools />
    </>
  ),
});
