import { useCallback, useMemo } from 'react';

import {
  MultiStepContext,
  useMultiStepContext,
} from './MultiStepContext';
import type {
  MultiStepContextValue,
  MultiStepPanelProps,
  MultiStepProgressProps,
  MultiStepRootProps,
} from './types';
import { useMultiStep } from './useMultiStep';

function Root<TStep extends string>({
  steps,
  initialStep,
  children,
}: MultiStepRootProps<TStep>) {
  const multiStep = useMultiStep({
    steps,
    initialStep,
  });

  const goto = useCallback(
    (step: string) => {
      const typedStep = steps.find(
        (item) => item.id === step,
      )?.id;

      if (typedStep) {
        multiStep.goto(typedStep);
      }
    },
    [steps, multiStep],
  );

  const contextValue = useMemo<MultiStepContextValue>(
    () => ({
      steps,
      currentStep: multiStep.currentStep,
      currentIndex: multiStep.currentIndex,
      isFirst: multiStep.isFirst,
      isLast: multiStep.isLast,
      next: multiStep.next,
      previous: multiStep.previous,
      goto,
    }),
    [
      steps,
      multiStep.currentStep,
      multiStep.currentIndex,
      multiStep.isFirst,
      multiStep.isLast,
      multiStep.next,
      multiStep.previous,
      goto,
    ],
  );

  return (
    <MultiStepContext.Provider value={contextValue}>
      {children}
    </MultiStepContext.Provider>
  );
}

function Panel<TStep extends string>({
  step,
  children,
}: MultiStepPanelProps<TStep>) {
  const { currentStep } = useMultiStepContext();

  if (currentStep !== step) {
    return null;
  }

  return children;
}

// TODO: clickable or navigation
function Progress({
  className,
  classNames,
}: MultiStepProgressProps) {
  const { steps, currentIndex, currentStep } =
    useMultiStepContext();

  return (
    <ol
      className={[classNames?.progress, className]
        .filter(Boolean)
        .join(' ')}
    >
      {steps.map((step, index) => {
        const active = step.id === currentStep;
        const completed = index < currentIndex;

        const state = completed
          ? 'complete'
          : active
            ? 'active'
            : 'upcoming';

        return (
          <li key={step.id} className={classNames?.item}>
            <div
              className={classNames?.step}
              data-state={state}
            >
              <span className={classNames?.number}>
                {completed ? '✓' : index + 1}
              </span>

              {step.label && (
                <span className={classNames?.label}>
                  {step.label}
                </span>
              )}
            </div>

            {index < steps.length - 1 && (
              <div
                className={classNames?.line}
                data-state={
                  completed ? 'complete' : 'upcoming'
                }
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

export const MultiStep = {
  Root,
  Panel,
  Progress,
};
