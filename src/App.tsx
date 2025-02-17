import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { AppToaster } from './components/AppToaster';

// Create a new router instance
const router = createRouter({ routeTree });

function App() {
  <AppToaster />;
  return <RouterProvider router={router} />;
}

export default App;
