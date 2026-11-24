import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { loginApi } from '../api/loginApi';

type UseLoginOptions = {
  onSuccess?: () => void;
};

type LoginValues = {
  email: string;
  password: string;
  remember: boolean;
};

export function useRegistration({
  onSuccess,
}: UseLoginOptions) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const login = useMutation({
    mutationFn: (values: LoginValues) =>
      loginApi.login(values),
    onSuccess,
  });

  const loginWithProvider = useMutation({
    mutationFn: (
      provider: 'google' | 'microsoft' | 'github',
    ) => loginApi.loginWithProvider(provider),
    onSuccess,
  });

  return {
    email: {
      value: email,
      setValue: setEmail,
    },

    password: {
      value: password,
      setValue: setPassword,
    },

    remember: {
      value: remember,
      setValue: setRemember,
    },

    submit: async () => {
      await login.mutateAsync({
        email,
        password,
        remember,
      });
    },

    provider: {
      submit: async (
        provider: 'google' | 'microsoft' | 'github',
      ) => {
        await loginWithProvider.mutateAsync(provider);
      },
    },

    loading: login.isPending || loginWithProvider.isPending,

    error:
      login.error?.message ??
      loginWithProvider.error?.message ??
      null,

    data: login.data,
  };
}
