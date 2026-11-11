import { createContext, useContext } from 'react';

import type { MultiStepContextValue } from './types';

export const MultiStepContext =
  createContext<MultiStepContextValue | null>(null);

export function useMultiStepContext() {
  const context = useContext(MultiStepContext);

  if (!context) {
    throw new Error(
      'MultiStep components must be used inside <MultiStep.Root>.',
    );
  }

  return context;
}
