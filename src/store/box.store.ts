import { Box } from 'domain/entities/box.entity';
// eslint-disable-next-line import/order
import { create } from 'zustand';

interface BoxStoreState {
  box: Box;
  update: (box: Box) => void;
}

export const useBox = create<BoxStoreState>(set => ({
  box: {
    width: 300,
    height: 300,
    color: '#ffffff',
    radius: 10,
  },
  update: (box: Box) => {
    set(state => ({ box: { ...state.box, ...box } }));
  },
}));
