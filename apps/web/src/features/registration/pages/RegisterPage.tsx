import { useState } from 'react';
import styles from './RegisterPage.module.css';

import { BrandPanel } from '../components/BrandPanel';
import { RegistrationFlow } from '../components/RegistrationFlow';

export default function RegisterPage() {
  const [step, setStep] =
    useState<RegistrationStep>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function submitEmail() {
    setError('');
    setLoading(true);

    try {
      // TODO:
      // await registrationApi.start(email);

      await new Promise((resolve) =>
        setTimeout(resolve, 500),
      );

      setStep('verification');
    } catch {
      setError("We couldn't start your registration.");
    } finally {
      setLoading(false);
    }
  }

  async function verifyEmail() {
    if (code.length !== 6) {
      setError('Enter the 6-digit verification code.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // TODO:
      // await registrationApi.verifyEmail(code);

      await new Promise((resolve) =>
        setTimeout(resolve, 500),
      );

      setStep('password');
    } catch {
      setError(
        'That verification code is invalid or expired.',
      );
    } finally {
      setLoading(false);
    }
  }

  async function createAccount() {
    if (password.length < 12) {
      setError(
        'Your password must contain at least 12 characters.',
      );
      return;
    }

    if (password !== confirmation) {
      setError("Your passwords don't match.");
      return;
    }

    setError('');
    setLoading(true);

    try {
      // TODO:
      // await registrationApi.setPassword(password);

      await new Promise((resolve) =>
        setTimeout(resolve, 600),
      );

      setStep('complete');
    } catch {
      setError("We couldn't create your account.");
    } finally {
      setLoading(false);
    }
  }

  function goBack() {
    setError('');

    if (step === 'verification') {
      setStep('email');
    } else if (step === 'password') {
      setStep('verification');
    }
  }

  return (
    <main className={styles.root}>
      <section className={styles.shell}>
        <BrandPanel />

        <section className={styles.formPanel}>
          <RegistrationFlow />
        </section>
      </section>
    </main>
  );
}
