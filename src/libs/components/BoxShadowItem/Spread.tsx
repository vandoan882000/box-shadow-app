import { Slider } from '@mui/material';
import { FC } from 'react';

interface SpreadProps {
  value: number;
  onChange: () => void;
}

export const Spread: FC<SpreadProps> = ({ value, onChange }) => {
  return (
    <div className="mb-15">
      <span className="mb-10 flex justify-between">
        <strong> Spread</strong>
        <span>{value}px</span>
      </span>
      <Slider min={-100} max={100} value={value} onChange={onChange} />
    </div>
  );
};
