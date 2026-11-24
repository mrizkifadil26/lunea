import type { PasswordRequirementsProps } from './PasswordRequirements.types';

import styles from './PasswordRequirements.module.css';
import {
  defaultRequirements,
  evaluateRequirements,
} from './PasswordRequirements.utils';
import { PasswordRequirementsList } from './variants/PasswordRequirementsList';
import { PasswordRequirementsMeter } from './variants/PasswordRequirementsMeter';
import { PasswordRequirementsProgress } from './variants/PasswordRequirementsProgress';

export function PasswordRequirements({
  password,
  requirements = defaultRequirements,
  variant = 'list',
  visible = true,
  validated = false,
  compromiseStatus = 'unknown',
}: PasswordRequirementsProps) {
  const results = evaluateRequirements(
    password,
    requirements,
  );

  return (
    <div
      className={styles.container}
      data-visible={visible || undefined}
      aria-hidden={!visible}
    >
      <div className={styles.content}>
        {variant === 'progress' && (
          <PasswordRequirementsProgress
            password={password}
            results={results}
            validated={validated}
            compromiseStatus={compromiseStatus}
          />
        )}

        {variant === 'meter' && (
          <PasswordRequirementsMeter results={results} />
        )}

        {variant === 'list' && (
          <PasswordRequirementsList results={results} />
        )}
      </div>
    </div>
  );
}
