import {
  useCallback,
  useState,
  type ChangeEvent,
  type ClipboardEvent,
  type KeyboardEvent,
} from 'react';

type UseOtpInputOptions = {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
};

export function useOtpInput({
  length = 6,
  value: controlledValue,
  onChange,
  onComplete,
}: UseOtpInputOptions = {}) {
  const [internalValue, setInternalValue] = useState('');

  const value = controlledValue ?? internalValue;

  const updateValue = useCallback(
    (nextValue: string) => {
      const next = nextValue.replace(/\D/g, '').slice(0, length);

      if (controlledValue === undefined) {
        setInternalValue(next);
      }

      onChange?.(next);

      if (next.length === length) {
        onComplete?.(next);
      }
    },
    [controlledValue, length, onChange, onComplete],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      updateValue(event.target.value);
    },
    [updateValue],
  );

  const handlePaste = useCallback(
    (event: ClipboardEvent<HTMLInputElement>) => {
      event.preventDefault();

      updateValue(event.clipboardData.getData('text'));
    },
    [updateValue],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Backspace' && value.length > 0) {
        event.preventDefault();

        updateValue(value.slice(0, -1));
      }
    },
    [updateValue, value],
  );

  return {
    value,
    handleChange,
    handlePaste,
    handleKeyDown,
  };
}
