import type {
  PasswordRequirement,
  PasswordRequirementResult,
  PasswordStrength,
} from './PasswordRequirements.types';

export const defaultRequirements: PasswordRequirement[] = [
  {
    id: 'length',
    label: 'At least 8 characters',
    check: (value) => value.length >= 8,
  },
  {
    id: 'uppercase',
    label: 'One uppercase letter',
    check: (value) => /[A-Z]/.test(value),
  },
  {
    id: 'lowercase',
    label: 'One lowercase letter',
    check: (value) => /[a-z]/.test(value),
  },
  {
    id: 'number',
    label: 'One number',
    check: (value) => /\d/.test(value),
  },
];

export function evaluateRequirements(
  password: string,
  requirements: PasswordRequirement[],
): PasswordRequirementResult[] {
  return requirements.map((requirement) => ({
    ...requirement,
    valid: requirement.check(password),
  }));
}

export function getPasswordStrength(
  password: string,
  results: PasswordRequirementResult[],
  validated: boolean,
): PasswordStrength {
  if (!password) {
    return 'empty';
  }

  const lengthRequirement = results.find(
    ({ id }) => id === 'length',
  );

  const meetsMinimumLength =
    lengthRequirement?.valid ?? password.length >= 8;

  /*
   * Forbidden is a policy state, not a strength level.
   *
   * We only expose it after validation has been triggered.
   */
  if (validated && !meetsMinimumLength) {
    return 'forbidden';
  }

  /*
   * Before validation, don't call an incomplete password
   * "forbidden". The meter is only giving live feedback.
   */
  if (!meetsMinimumLength) {
    return 'weak';
  }

  const validCount = results.filter(
    ({ valid }) => valid,
  ).length;

  const total = results.length;

  if (validCount <= 2) {
    return 'weak';
  }

  if (validCount < total) {
    return 'good';
  }

  return 'strong';
}
