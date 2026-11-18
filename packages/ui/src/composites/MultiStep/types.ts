import type { ReactNode } from 'react';

export type MultiStepDefinition<TStep extends string> = {
  id: TStep;
  label?: string;
};

export type UseMultiStepOptions<TStep extends string> = {
  steps: readonly MultiStepDefinition<TStep>[];
  initialStep?: TStep;
};

export type UseMultiStepReturn<TStep extends string> = {
  steps: readonly MultiStepDefinition<TStep>[];

  currentStep: TStep;
  currentIndex: number;

  isFirst: boolean;
  isLast: boolean;

  next: () => void;
  previous: () => void;
  goto: (step: TStep) => void;
};

export type MultiStepContextValue =
  UseMultiStepReturn<string>;

export type MultiStepRootProps<TStep extends string> = {
  steps: readonly MultiStepDefinition<TStep>[];
  initialStep?: TStep;
  children: ReactNode;
};

export type MultiStepPanelProps<TStep extends string> = {
  step: TStep;
  children: ReactNode;
};

export type MultiStepProgressProps = {
  className?: string;
  classNames?: {
    progress?: string;
    item?: string;
    step?: string;
    number?: string;
    label?: string;
    line?: string;
  };
};
