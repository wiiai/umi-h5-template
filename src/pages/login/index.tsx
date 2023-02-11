import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { observer } from 'mobx-react';
import styles from './index.less';

const LoginScreen = () => {
  return (
    <div className={styles['login-screen']}>
      <div className={styles['form']}>
        <TextField sx={{ mb: 4 }} fullWidth label="账户" />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="密码"
          type="password"
          autoComplete="current-password"
        />
        <Button fullWidth variant="contained">
          提 交
        </Button>
      </div>
    </div>
  );
};

export default observer(LoginScreen);
