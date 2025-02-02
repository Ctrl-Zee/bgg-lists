import { Link } from '@tanstack/react-router';
import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <div className="flex h-screen flex-col overflow-hidden bg-red-100 p-8">
        <Link to="/collection" className="[&.active]:font-bold">
          Collection
        </Link>
        <main className="grow overflow-y-auto">
          {children}
          {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
        </main>
      </div>
    </>
  );
};
