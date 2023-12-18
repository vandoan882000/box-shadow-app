import { Checkbox, FormControlLabel } from '@mui/material';
import { FC } from 'react';

interface InsetProps {
  value: boolean;
  onChange: () => void;
}

export const Inset: FC<InsetProps> = ({ value, onChange }) => {
  return <FormControlLabel label="Inset" control={<Checkbox checked={value} onChange={onChange} />} />;
};
