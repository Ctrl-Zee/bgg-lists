import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return <main className="h-full grow overflow-y-auto">{children}</main>;
};
