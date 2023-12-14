import { createLayer } from 'application/createLayer';
import { deleteLayer } from 'application/deleteLayer';
import { updateLayer } from 'application/updateLayer';
// eslint-disable-next-line import/order
import { BoxShadow } from 'domain/entities/boxShadow.entity';
import { uniqueId } from 'libs/utils/uniqueId';
import { create } from 'zustand';

interface StoreState {
  boxShadows: BoxShadow[];
  create: () => void;
  update: (boxShadow: BoxShadow) => void;
  deleteShadow: (id: string) => void;
}

export const useBoxShadow = create<StoreState>(set => ({
  boxShadows: [
    {
      id: uniqueId(),
      horizontal: 0,
      vertical: 10,
      blur: 10,
      spread: 0,
      color: 'rgba(0,0,0,0.1)',
      inset: false,
    },
  ],
  create: () => {
    set(state => ({ boxShadows: createLayer(state.boxShadows) }));
  },
  update: (boxShadow: BoxShadow) => {
    set(state => ({ boxShadows: updateLayer(state.boxShadows, boxShadow) }));
  },
  deleteShadow: (id: string) => {
    set(state => ({ boxShadows: deleteLayer(state.boxShadows, id) }));
  },
}));
