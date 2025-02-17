import { createFileRoute } from '@tanstack/react-router';
import { RegisterForm } from '../features/account/components/RegisterForm';
import { Text } from '@mantine/core';

export const Route = createFileRoute('/register')({
  component: Register,
});

function Register() {
  return (
    <div className="flex h-full flex-col items-center justify-center w-full">
      <Text size="xl">Create your account</Text>
      <div className="w-full p-8 md:w-96">
        <RegisterForm />
      </div>
    </div>
  );
}
