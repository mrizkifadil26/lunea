import { useState } from 'react';
import { registrationApi } from '../api/registrationApi';
import { useMutation } from '@tanstack/react-query';

type UseRegistrationOptions = {
  next: () => void;
};

export function useRegistration({
  next,
}: UseRegistrationOptions) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] =
    useState('');

  const createRegistration = useMutation({
    mutationFn: registrationApi.start,
  });

  const verifyRegistration = useMutation({
    mutationFn: ({ code }: { code: string }) =>
      registrationApi.verify(code),
  });

  const setRegistrationPassword = useMutation({
    mutationFn: ({
      password,
      passwordConfirmation,
    }: {
      password: string;
      passwordConfirmation: string;
    }) =>
      registrationApi.setPassword(
        password,
        passwordConfirmation,
      ),
  });

  return {
    email: {
      value: email,
      setValue: setEmail,

      submit: async () => {
        const result =
          await createRegistration.mutateAsync(email);

        if (result.error) return;

        next();
      },

      data: createRegistration.data,
      loading: createRegistration.isPending,
      error: createRegistration.error?.message ?? null,
    },

    verification: {
      value: code,
      setValue: setCode,

      submit: async () => {
        const result = await verifyRegistration.mutateAsync(
          {
            code,
          },
        );

        if (result.error) return;

        next();
      },

      data: verifyRegistration.data,
      loading: verifyRegistration.isPending,
      error: verifyRegistration.error?.message ?? null,
    },

    password: {
      value: password,
      setValue: setPassword,

      confirmation: passwordConfirmation,
      setConfirmation: setPasswordConfirmation,

      submit: async () => {
        const result =
          await setRegistrationPassword.mutateAsync({
            password,
            passwordConfirmation,
          });

        if (result.error) return;

        next();
      },

      data: setRegistrationPassword.data,
      loading: setRegistrationPassword.isPending,
      error: verifyRegistration.error?.message ?? null,
    },
  };
}
