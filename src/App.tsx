import { Button, Stack } from '@mui/material';
import { useCallback, useState } from 'react';
import { KeyField } from '@aleksandr.ilinykh.weasl/interview-ui';

function generateKey() {
  return 'ORD-' + Math.random().toString(36).slice(2, 8).toUpperCase();
}

export default function App() {
  const [key, setKey] = useState('ORD-000001');

  const handleGenerateKey = useCallback(() => {
    setKey(generateKey());
  }, []);

  return (
    <Stack spacing={2} sx={{ p: 4, maxWidth: 400 }}>
      <KeyField label="Order key" value={key} onChange={setKey} />
      <Button variant="contained" onClick={handleGenerateKey}>
        Generate key
      </Button>
    </Stack>
  );
}
