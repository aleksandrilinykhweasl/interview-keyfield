import { Button, Stack, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { KeyField } from './lib/KeyField';

type OrderForm = {
  key: string;
};

function generateKey() {
  return 'ORD-' + Math.random().toString(36).slice(2, 8).toUpperCase();
}

export default function App() {
  const [form, setForm] = useState<OrderForm>({ key: 'ORD-000001' });

  const handleKeyChange = useCallback((key: string) => {
    setForm((prev) => ({ ...prev, key }));
  }, []);

  const handleGenerateKey = useCallback(() => {
    setForm((prev) => ({ ...prev, key: generateKey() }));
  }, []);

  return (
    <Stack spacing={2} sx={{ p: 4, maxWidth: 400 }}>
      <Typography variant="h6">New order</Typography>
      <KeyField value={form.key} onChange={handleKeyChange} />
      <Button variant="contained" onClick={handleGenerateKey}>
        Generate key
      </Button>
      <Typography>Form state: {form.key || '(empty)'}</Typography>
    </Stack>
  );
}
