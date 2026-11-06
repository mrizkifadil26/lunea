import {
  beginEmailRegistrationRegistrationsStartPost,
  setPasswordRegistrationsPasswordPost,
  verifyRegistrationRegistrationsVerifyPost,
} from '@/api/generated';

export const registrationApi = {
  start(email: string) {
    return beginEmailRegistrationRegistrationsStartPost({
      body: {
        email,
      },
    });
  },

  verify(code: string) {
    return verifyRegistrationRegistrationsVerifyPost({
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
