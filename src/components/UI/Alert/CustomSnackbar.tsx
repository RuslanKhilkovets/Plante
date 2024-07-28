import React from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ICustomSnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const CustomSnackbar: React.FC<ICustomSnackbarProps> = ({ open, message, onClose }) => {
  return (
    <Snackbar
        open={open} 
        autoHideDuration={100} 
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
        <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
            {message}
        </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
