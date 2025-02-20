import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, Button } from '@mantine/core';
import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { supabase } from '../../../supabaseClient';
import { useToast } from '../../../hooks/useToast';

const RegisterFormSchema = z.object({
  email: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
  bggName: z.string().min(1, 'Required'),
});

type RegisterFormType = z.infer<typeof RegisterFormSchema>;

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: '',
      password: '',
      bggName: '',
    },
  });

  const onSubmit = handleSubmit(async (formData) => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          bggName: formData.bggName,
        },
      },
    });

    if (error) {
      toast.error(error.message);
    }

    if (data) {
      toast.success('User account created.');
      navigate({ to: '/login' });
    }
  });

  return (
    <form onSubmit={onSubmit} className="w-full">
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
      <Controller
        name="bggName"
        control={control}
        render={({ field }) => (
          <div className="mb-4 w-full">
            <TextInput
              {...field}
              id={field.name}
              error={errors.bggName?.message}
              label="Board Game Geek Name"
            />
          </div>
        )}
      />
      <Button fullWidth type="submit" disabled={!isValid}>
        Register
      </Button>
    </form>
  );
};
