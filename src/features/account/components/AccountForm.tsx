import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, Button } from '@mantine/core';
import { Tables } from '../../../db/database.types';

type AccountFormProps = {
  profile: Tables<'profile'> | undefined;
};

const AccountFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  bggName: z.string(),
});

type AccountFormType = z.infer<typeof AccountFormSchema>;

export const AccountForm = ({ profile }: AccountFormProps) => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<AccountFormType>({
    resolver: zodResolver(AccountFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      bggName: profile?.bgg_name ?? '',
    },
  });

  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData);
  });

  return (
    <form onSubmit={onSubmit} className="w-full">
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <div className="mb-4 w-full">
            <TextInput
              {...field}
              id={field.name}
              error={errors.firstName?.message}
              label="First Name"
            />
          </div>
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <div className="mb-4 w-full">
            <TextInput
              {...field}
              id={field.name}
              error={errors.lastName?.message}
              label="Last Name"
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
              label="BGG Name"
            />
          </div>
        )}
      />
      <Button fullWidth type="submit" disabled={!isValid}>
        Update
      </Button>
    </form>
  );
};
