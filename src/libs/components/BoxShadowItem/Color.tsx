import ColorPicker from 'material-ui-color-picker';
import { FC } from 'react';

interface ColorProps {
  value: string;
  onChange: () => void;
}

export const Color: FC<ColorProps> = ({ value, onChange }) => {
  return (
    <div className="mb-15">
      <span className="mb-10 flex justify-between">
        <strong> Color</strong>
      </span>
      <ColorPicker name="color" defaultValue={value} value={onChange} onChange={onChange} />
    </div>
  );
};
