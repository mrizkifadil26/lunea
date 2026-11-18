import { getApiErrorMessage } from '@/shared/api';
import {
  beginEmailRegistrationRegistrationsStartPost,
  setPasswordRegistrationsPasswordPost,
  verifyRegistrationLinkRegistrationsVerifyLinkPost,
  verifyRegistrationOtpRegistrationsVerifyOtpPost,
} from '@/shared/api/generated';

export const registrationApi = {
  async start(email: string) {
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

  async verifyLink(token: string) {
    const result =
      await verifyRegistrationLinkRegistrationsVerifyLinkPost(
        {
          body: {
            token,
          },
        },
      );

    if (result.error) {
      throw new Error(getApiErrorMessage(result.error));
    }

    return result.data;
  },

  async verifyOtp(code: string) {
    const result =
      await verifyRegistrationOtpRegistrationsVerifyOtpPost(
        {
          body: {
            code,
          },
        },
      );

    if (result.error) {
      throw new Error(getApiErrorMessage(result.error));
    }

    return result.data;
  },

  setPassword(
    // registrationId: string,
    passwordConfirmation: string,
    password: string,
  ) {
    return setPasswordRegistrationsPasswordPost({
      //   registrationId,
      body: {
        password,
        password_confirmation: passwordConfirmation,
      },
    });
  },
};
