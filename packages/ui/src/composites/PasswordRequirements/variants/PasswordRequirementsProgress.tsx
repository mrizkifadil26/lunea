import type { CSSProperties } from 'react';

import type {
  PasswordCompromiseStatus,
  PasswordRequirementResult,
  PasswordStrength,
} from '../PasswordRequirements.types';

import { getPasswordStrength } from '../PasswordRequirements.utils';
import styles from './PasswordRequirementsProgress.module.css';

type PasswordRequirementsProgressProps = {
  password: string;
  results: PasswordRequirementResult[];
  validated: boolean;
  compromiseStatus: PasswordCompromiseStatus;
};

const strengthLabels: Record<PasswordStrength, string> = {
  empty: '',
  forbidden: 'Forbidden',
  weak: 'Weak',
  good: 'Good password',
  strong: 'Strong password',
};

export function PasswordRequirementsProgress({
  password,
  results,
  validated,
  compromiseStatus,
}: PasswordRequirementsProgressProps) {
  const strength = getPasswordStrength(
    password,
    results,
    validated,
  );

  const validCount = results.filter(
    ({ valid }) => valid,
  ).length;

  const total = results.length;

  const progress =
    total === 0 ? 0 : (validCount / total) * 100;

  const compromised = compromiseStatus === 'compromised';

  const label = compromised
    ? 'Compromised'
    : strengthLabels[strength];

  const ariaValueText = compromised
    ? 'Compromised password'
    : label || 'No password entered';

  return (
    <div
      className={styles.container}
      data-strength={strength}
      data-compromised={compromised || undefined}
    >
      <div className={styles.header}>
        <span className={styles.status}>{label}</span>
      </div>

      <div
        className={styles.track}
        role="progressbar"
        aria-label="Password requirements"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={validCount}
        aria-valuetext={ariaValueText}
      >
        <div
          className={styles.fill}
          style={
            {
              '--progress': `${progress}%`,
            } as CSSProperties
          }
        />
      </div>

      {compromised && (
        <p className={styles.warning}>
          This password has appeared in a data breach.
          Choose a different password.
        </p>
      )}
    </div>
  );
}
