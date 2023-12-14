import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Alert, Button, Snackbar, Stack } from '@mui/material';
import { getBoxShadowStyle } from 'application/getBoxShadowStyle';
import { getBoxStyle } from 'application/getBoxStyle';
import { SyntheticEvent, useState } from 'react';
import { useBox } from 'store/box.store';
import { useBoxShadow } from 'store/boxShadow.store';

export const Content = () => {
  const { boxShadows } = useBoxShadow();
  const { box } = useBox();
  const [open, setOpen] = useState(false);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCopyCode = () => {
    setOpen(true);
    navigator.clipboard.writeText(`box-shadow: ${getBoxShadowStyle(boxShadows)}`);
  };
  return (
    <div className="p-100 flex flex-col justify-between items-center w-50% h-100% bg-gray1">
      <div className="m:auto w-300 h-300 bg-light" style={{ boxShadow: getBoxShadowStyle(boxShadows), ...getBoxStyle(box) }}></div>
      <div className="p-20 flex justify-between items-center bg-light border-1 border-gray3 shadow-2">
        <span>box-shadow: {getBoxShadowStyle(boxShadows)};</span>
        <Stack spacing={2}>
          <Button variant="text" onClick={handleCopyCode}>
            <ContentCopyIcon />
          </Button>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Code has been copied successfully.
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </div>
  );
};
