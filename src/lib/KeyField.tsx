import { TextField } from '@mui/material';
import { ChangeEvent, useCallback } from 'react';

export type KeyFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function KeyField({ value, onChange }: KeyFieldProps) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return <TextField label="Order key" defaultValue={value} onChange={handleChange} />;
}
