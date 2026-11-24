import { useMemo, useState } from 'react';

import type {
  UseMultiStepOptions,
  UseMultiStepReturn,
} from './types';

export function useMultiStep<TStep extends string>({
  steps,
  initialStep,
}: UseMultiStepOptions<TStep>): UseMultiStepReturn<TStep> {
  const firstStep = steps[0]?.id;
  if (!firstStep) {
    throw new Error(
      'MultiStep requires at least one step.',
    );
  }

  const [currentStep, setCurrentStep] = useState<TStep>(
    initialStep ?? firstStep,
  );

  const currentIndex = useMemo(
    () =>
      steps.findIndex((step) => step.id === currentStep),
    [steps, currentStep],
  );

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === steps.length - 1;

  function next() {
    const nextStep = steps[currentIndex + 1];

    if (nextStep) {
      setCurrentStep(nextStep.id);
    }
  }

  function previous() {
    const previousStep = steps[currentIndex - 1];

    if (previousStep) {
      setCurrentStep(previousStep.id);
    }
  }

  function goto(step: TStep) {
    setCurrentStep(step);
  }

  return {
    steps,
    currentStep,
    currentIndex,
    isFirst,
    isLast,
    next,
    previous,
    goto,
  };
}
