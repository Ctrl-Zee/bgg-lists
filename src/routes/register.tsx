import { Button, TextInput } from '@mantine/core';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { supabase } from '../supabaseClient';

export const Route = createFileRoute('/register')({
  component: Register,
});

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(error.message);
    }

    if (data) {
      setMessage('User account created.');
      setEmail('');
      setPassword('');
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
      <Button variant="filled" onClick={handleRegister}>
        Sign Up
      </Button>
      <Link to="/login">Login</Link>
    </>
  );
}
