import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './../layout/Newproject.module.css';
import Newproject from '../pages/Newproject';

export default function BasicTextFields() {
  return (

    <div class={styles.formProject}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" variant="outlined" />
     

      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
    </div>
  );
}