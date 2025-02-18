import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, Button } from '@mantine/core';
import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { supabase } from '../../../supabaseClient';
import { useUserStore } from '../../../stores/UserStore';
import { LocalUser } from '../../../models/LocalUser';

const LoginFormSchema = z.object({
  email: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

type LoginFormType = z.infer<typeof LoginFormSchema>;

export const LoginForm = () => {
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const userStore = useUserStore();

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (formData) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      userStore.setUser({
        id: data.user.id,
        email: data.user.email,
      } as LocalUser);
      navigate({ to: '/collection' });
    }
  });

  return (
    <form onSubmit={onSubmit} className="w-full">
      {message && <div className="mb-4 text-red-500">{message}</div>}
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div className="mb-4 w-full">
            <TextInput
              {...field}
              id={field.name}
              error={errors.email?.message}
              label="Email"
              type="email"
            />
          </div>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <div className="mb-4 w-full">
            <TextInput
              {...field}
              id={field.name}
              error={errors.password?.message}
              label="Password"
              type={showPassword ? 'text' : 'password'}
              rightSection={
                <ActionIcon
                  onClick={() => setShowPassword(!showPassword)}
                  variant="transparent"
                  aria-label="Settings"
                >
                  {showPassword ? <IconEyeClosed /> : <IconEye />}
                </ActionIcon>
              }
            />
          </div>
        )}
      />
      <Button fullWidth type="submit" disabled={!isValid}>
        Sign In
      </Button>
    </form>
  );
};
