import { MultiStep } from '@lunea/ui';
import { CompletionStep } from './steps/CompletionStep';
import { EmailStep } from './steps/EmailStep';
import { PasswordStep } from './steps/PasswordStep';
import { VerificationStep } from './steps/VerificationStep';

import styles from './RegistrationFlow.module.css';
import progressStyles from './RegistrationProgress.module.css';
import { useRegistration } from '../hooks/useRegistration';
import { useMultiStepContext } from '@lunea/ui';

const steps = [
  { id: 'email', label: 'Email' },
  { id: 'verification', label: 'Verify' },
  { id: 'password', label: 'Password' },
  { id: 'complete', label: 'Complete' },
] as const;

export function RegistrationFlow() {
  return (
    <div className={styles.container}>
      <MultiStep.Root steps={steps}>
        <MultiStep.Progress classNames={progressStyles} />

        <RegistrationContent />
      </MultiStep.Root>
    </div>
  );
}

export function RegistrationContent() {
  const { previous, next } = useMultiStepContext();

  const registration = useRegistration({ next });

  return (
    <>
      <MultiStep.Panel step="email">
        <EmailStep
          email={registration.email.value}
          loading={registration.email.loading}
          error={registration.email.error}
          onEmailChange={registration.email.setValue}
          onSubmit={registration.email.submit}
        />
      </MultiStep.Panel>

      <MultiStep.Panel step="verification">
        <VerificationStep
          email={registration.email.value}
          code={registration.verification.value}
          loading={registration.verification.loading}
          error={registration.verification.error}
          onCodeChange={registration.verification.setValue}
          onSubmit={registration.verification.submit}
          onBack={previous}
        />
      </MultiStep.Panel>

      <MultiStep.Panel step="verification">
        <PasswordStep
          password={registration.password.value}
          confirmation={registration.password.confirmation}
          loading={registration.password.loading}
          error={registration.password.error}
          onPasswordChange={registration.password.setValue}
          onConfirmationChange={
            registration.password.setConfirmation
          }
          onSubmit={registration.password.submit}
          onBack={previous}
        />
      </MultiStep.Panel>

      <MultiStep.Panel step="complete">
        <CompletionStep />
      </MultiStep.Panel>
    </>
  );
}
