import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, Slider } from '@mui/material';
import ColorPicker from 'material-ui-color-picker';
import { FC, useState } from 'react';
import { useBoxShadow } from 'store/boxShadow.store';

export interface BoxShadowItemProp {
  id: string;
  name: string;
  horizontal: number;
  vertical: number;
  blur: number;
  spread: number;
  color: string;
  inset: boolean;
}

export const BoxShadowItem: FC<BoxShadowItemProp> = ({ id, name, horizontal, vertical, blur, spread, color, inset }) => {
  const { update, deleteShadow } = useBoxShadow();
  const [currentHorizontal, setHorizontal] = useState<number>(horizontal);
  const [currentVertical, setVertical] = useState<number>(vertical);
  const [currentBlur, setBlur] = useState<number>(blur);
  const [currentSpread, setSpread] = useState<number>(spread);
  const [currentColor, setColor] = useState<string>(color);
  const [currentInset, setInset] = useState<boolean>(inset);

  const handleUpdate = (horizontal: number, vertical: number, blur: number, spread: number, color: string, inset: boolean) => {
    update({ id, horizontal, vertical, blur, spread, color, inset });
  };

  const handleChangeHorizontal = (event: Event, newValue: number | number[]) => {
    handleUpdate(newValue as number, currentVertical, currentBlur, currentSpread, currentColor, currentInset);
    setHorizontal(newValue as number);
  };

  const handleChangeVertical = (event: Event, newValue: number | number[]) => {
    handleUpdate(currentHorizontal, newValue as number, currentBlur, currentSpread, currentColor, currentInset);
    setVertical(newValue as number);
  };

  const handleChangeBlur = (event: Event, newValue: number | number[]) => {
    handleUpdate(currentHorizontal, currentVertical, newValue as number, currentSpread, currentColor, currentInset);
    setBlur(newValue as number);
  };

  const handleChangeSpread = (event: Event, newValue: number | number[]) => {
    handleUpdate(currentHorizontal, currentVertical, currentBlur, newValue as number, currentColor, currentInset);
    setSpread(newValue as number);
  };

  const handleChangeColor = (colour: string) => {
    handleUpdate(currentHorizontal, currentVertical, currentBlur, currentSpread, colour, currentInset);
    setColor(colour);
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleUpdate(currentHorizontal, currentVertical, currentBlur, currentSpread, currentColor, event.target.checked);
    setInset(event.target.checked);
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <div className="flex items-center">
          <span className="mr-15">{name}</span>
          <Button variant="outlined" color="error" onClick={() => deleteShadow(id)}>
            <DeleteForeverIcon />
          </Button>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="mb-15">
          <span className="mb-10 flex justify-between">
            <strong> Horizontal offset</strong>
            <span>{currentHorizontal}px</span>
          </span>
          <Slider min={-100} max={100} value={currentHorizontal} onChange={handleChangeHorizontal} />
        </div>
        <div className="mb-15">
          <span className="mb-10 flex justify-between">
            <strong> Vertical offset</strong>
            <span>{currentVertical}px</span>
          </span>
          <Slider min={-100} max={100} value={currentVertical} onChange={handleChangeVertical} />
        </div>
        <div className="mb-15">
          <span className="mb-10 flex justify-between">
            <strong> Blur radius</strong>
            <span>{currentBlur}px</span>
          </span>
          <Slider min={0} max={100} value={currentBlur} onChange={handleChangeBlur} />
        </div>
        <div className="mb-15">
          <span className="mb-10 flex justify-between">
            <strong> Spread radius</strong>
            <span>{currentSpread}px</span>
          </span>
          <Slider min={-100} max={100} value={currentSpread} onChange={handleChangeSpread} />
        </div>
        <div className="mb-15">
          <span className="mb-10 flex justify-between">
            <strong> Color</strong>
          </span>
          <ColorPicker name="color" defaultValue={currentColor} value={handleChangeColor} onChange={handleChangeColor} />
        </div>
        <FormControlLabel label="Inset" control={<Checkbox checked={currentInset} onChange={handleCheck} />} />
      </AccordionDetails>
    </Accordion>
  );
};
