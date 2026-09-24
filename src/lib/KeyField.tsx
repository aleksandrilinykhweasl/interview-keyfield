import { TextField } from '@mui/material';
import debounce from 'lodash/debounce';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

export type KeyFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function KeyField({ value, onChange }: KeyFieldProps) {
  const [text, setText] = useState(value);
  const emitChange = useMemo(() => debounce(onChange, 300), [onChange]);

  useEffect(() => () => emitChange.cancel(), [emitChange]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
      emitChange(event.target.value);
    },
    [emitChange],
  );

  return <TextField label="Order key" value={text} onChange={handleChange} />;
}
