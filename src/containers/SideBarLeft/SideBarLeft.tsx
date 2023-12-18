import { Button, Divider } from '@mui/material';
import { useBoxShadow } from 'store/boxShadow.store';

import { BoxShadowItem } from '../../libs/components/BoxShadowItem/BoxShadowItem';

export const SideBarLeft = () => {
  const { boxShadows, create } = useBoxShadow();
  return (
    <div className="w-25% h-100% shadow-1 border-r-1 border-r-gray3">
      <div className="p-15 h-70 flex items-center justify-between">
        <span className="text-20 font-medium">Customize Shadows</span>
        <Button variant="contained" onClick={create}>
          Add a shadow
        </Button>
      </div>
      <Divider />
      <div className="overflow-auto" style={{ height: 'calc(100vh - 71px)' }}>
        {boxShadows.map((item, index) => (
          <BoxShadowItem
            key={item.id}
            id={item.id}
            name={`Box Shadow ${index + 1}`}
            horizontal={item.horizontal}
            vertical={item.vertical}
            blur={item.blur}
            spread={item.spread}
            color={item.color}
            inset={item.inset}
          />
        ))}
      </div>
    </div>
  );
};
