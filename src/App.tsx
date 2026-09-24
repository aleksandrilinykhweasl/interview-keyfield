import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { KeyField } from './lib/KeyField';

function generateKey() {
  return 'ORD-' + Math.random().toString(36).slice(2, 8).toUpperCase();
}

export default function App() {
  const [form, setForm] = useState({ key: '' });

  return (
    <Stack spacing={2} sx={{ p: 4, maxWidth: 400 }}>
      <Typography variant="h6">New order</Typography>
      <KeyField value={form.key} onChange={(key) => setForm({ ...form, key })} />
      <Button variant="contained" onClick={() => setForm({ ...form, key: generateKey() })}>
        Generate key
      </Button>
      <Typography>Form state: {form.key || '(empty)'}</Typography>
    </Stack>
  );
}
