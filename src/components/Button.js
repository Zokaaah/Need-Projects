import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './layout/Home.module.css'


export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" class={styles.btn1}>Conheça a ideia</Button>
      <Button variant="outlined">Comece agora</Button>
    </Stack>
  );
}
