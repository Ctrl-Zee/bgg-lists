import { Toaster } from 'sonner';

export const AppToaster = () => {
  return (
    <Toaster
      toastOptions={{
        className:
          'bg-card text-card-foreground ' +
          'data-[type=success]:bg-green-700 data-[type=success]:text-white ' +
          'data-[type=info]:bg-blue-200 data-[type=info]:text-blue-800 ' +
          'data-[type=warning]:bg-orange-100 data-[type=warning]:text-orange-600 ' +
          'data-[type=error]:bg-red-700 data-[type=error]:text-white',
      }}
      position="top-center"
      offset="1rem"
      richColors
    />
  );
};
