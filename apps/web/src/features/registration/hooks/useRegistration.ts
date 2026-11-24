import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { registrationApi } from '../api/registrationApi';

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
    mutationFn: (values: { code: string }) =>
      registrationApi.verifyOtp(values.code),
  });

  const setRegistrationPassword = useMutation({
    mutationFn: (values: {
      password: string;
      passwordConfirmation: string;
    }) =>
      registrationApi.setPassword(
        values.password,
        values.passwordConfirmation,
      ),
  });

  return {
    email: {
      value: email,
      setValue: setEmail,

      submit: async () => {
        await createRegistration.mutateAsync(email);
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
        await verifyRegistration.mutateAsync({
          code,
        });
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
        await setRegistrationPassword.mutateAsync({
          password,
          passwordConfirmation,
        });

        next();
      },

      data: setRegistrationPassword.data,
      loading: setRegistrationPassword.isPending,
      error: setRegistrationPassword.error?.message ?? null,
    },
  };
}
