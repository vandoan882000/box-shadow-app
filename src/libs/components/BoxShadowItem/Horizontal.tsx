import { Slider } from '@mui/material';
import { FC } from 'react';

interface HorizontalProps {
  value: number;
  onChange: () => void;
}

export const Horizontal: FC<HorizontalProps> = ({ value, onChange }) => {
  return (
    <div className="mb-15">
      <span className="mb-10 flex justify-between">
        <strong> Horizontal offset</strong>
        <span>{value}px</span>
      </span>
      <Slider min={-100} max={100} value={value} onChange={onChange} />
    </div>
  );
};
