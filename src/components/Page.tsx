type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return <div className="p-8">{children}</div>;
};
