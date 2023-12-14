import { Divider, Slider } from '@mui/material';
import ColorPicker from 'material-ui-color-picker';
import { FC, useState } from 'react';
import { useBox } from 'store/box.store';

export const SideBarRight: FC = () => {
  const { box, update } = useBox();
  const { width, height, radius, color } = box;
  const [currentWidth, setWidth] = useState<number>(width);
  const [currentHeight, setHeight] = useState<number>(height);
  const [currentColor, setColor] = useState<string>(color);
  const [currentRadius, setRadius] = useState<number>(radius);

  const handleUpdate = (width: number, height: number, color: string, radius: number) => {
    update({ width, height, color, radius });
  };

  const handleChangeWidth = (event: Event, newValue: number | number[]) => {
    handleUpdate(newValue as number, currentHeight, currentColor, currentRadius);
    setWidth(newValue as number);
  };

  const handleChangeHeight = (event: Event, newValue: number | number[]) => {
    handleUpdate(currentWidth, newValue as number, currentColor, currentRadius);
    setHeight(newValue as number);
  };

  const handleChangeColor = (newValue: string) => {
    handleUpdate(currentWidth, currentHeight, newValue, currentRadius);
    setColor(newValue);
  };

  const handleChangeRadius = (event: Event, newValue: number | number[]) => {
    handleUpdate(currentWidth, currentHeight, currentColor, newValue as number);
    setRadius(newValue as number);
  };

  return (
    <div className="w-25% h-100% shadow-1 border-r-1 border-r-gray1">
      <div className="p-15 h-70 flex items-center justify-between">
        <span className="text-20 font-medium">Box Properties</span>
      </div>
      <Divider />
      <div className="p-25 overflow-auto" style={{ height: 'calc(100vh - 71px)' }}>
        <div className="mb-15">
          <span className="mb-10 flex justify-between">
            <strong> Width</strong>
            <span>{currentWidth}px</span>
          </span>
          <Slider min={100} max={400} value={currentWidth} onChange={handleChangeWidth} />
        </div>
        <div className="mb-15">
          <span className="mb-10 flex justify-between">
            <strong>Height</strong>
            <span>{currentHeight}px</span>
          </span>
          <Slider min={100} max={400} value={currentHeight} onChange={handleChangeHeight} />
        </div>
        <div className="mb-15">
          <span className="mb-10 flex justify-between">
            <strong> Blur radius</strong>
            <span>{currentRadius}px</span>
          </span>
          <Slider min={0} max={100} value={currentRadius} onChange={handleChangeRadius} />
        </div>
        <div className="mb-15">
          <span className="mb-10 flex justify-between">
            <strong> Color</strong>
          </span>
          <ColorPicker name="color" defaultValue={currentColor} value={handleChangeColor} onChange={handleChangeColor} />
        </div>
      </div>
    </div>
  );
};
