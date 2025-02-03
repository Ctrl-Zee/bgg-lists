import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { TextInput, Button } from '@mantine/core';

export const Route = createFileRoute('/login')({
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      navigate({ to: '/collection' });
    }
  };

  return (
    <>
      <div>{message}</div>
      <TextInput
        placeholder="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <TextInput
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Button variant="filled" onClick={handleLogin}>
        Login
      </Button>
    </>
  );
}
