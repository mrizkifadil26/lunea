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

  verifyLink(token: string) {
    return verifyRegistrationLinkRegistrationsVerifyLinkPost(
      {
        body: {
          token,
        },
      },
    );
  },

  verifyOtp(code: string) {
    return verifyRegistrationOtpRegistrationsVerifyOtpPost({
      body: {
        code,
      },
    });
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
