import { TextField } from '@mui/material';
import debounce from 'lodash/debounce';
import { useMemo, useState } from 'react';

export type KeyFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function KeyField({ value, onChange }: KeyFieldProps) {
  const [text, setText] = useState(value);
  const emitChange = useMemo(() => debounce(onChange, 300), [onChange]);

  return (
    <TextField
      label="Order key"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        emitChange(e.target.value);
      }}
    />
  );
}
