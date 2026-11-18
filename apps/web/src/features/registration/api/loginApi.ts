import { getApiErrorMessage } from '@/shared/api';

type LoginProvider = 'google' | 'microsoft' | 'github';

type LoginValues = {
  email: string;
  password: string;
  remember: boolean;
};

export const loginApi = {
  async login(values: LoginValues) {
    const result =
      await beginEmailRegistrationRegistrationsStartPost({
        body: {
          email,
        },
      });

    if (result.error) {
      throw new Error(getApiErrorMessage(result.error));
    }

    return result.data;
  },

  async loginWithProvider(provider: LoginProvider) {
    const result =
      await beginEmailRegistrationRegistrationsStartPost({
        body: {
          email,
        },
      });

    if (result.error) {
      throw new Error(getApiErrorMessage(result.error));
    }

    return result.data;
  },
};
