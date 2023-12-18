import { Slider } from '@mui/material';
import { FC } from 'react';

interface BlurProps {
  value: number;
  onChange: () => void;
}

export const Blur: FC<BlurProps> = ({ value, onChange }) => {
  return (
    <div className="mb-15">
      <span className="mb-10 flex justify-between">
        <strong> Blur</strong>
        <span>{value}px</span>
      </span>
      <Slider min={0} max={100} value={value} onChange={onChange} />
    </div>
  );
};
