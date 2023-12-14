import { BoxShadow } from 'domain/entities/boxShadow.entity';
import { uniqueId } from 'libs/utils/uniqueId';

export function createLayer(boxShadows: BoxShadow[]) {
  return [
    ...boxShadows,
    {
      id: uniqueId(),
      horizontal: 0,
      vertical: 10,
      blur: 10,
      spread: 0,
      color: 'rgba(0,0,0,0.1)',
      inset: false,
    },
  ];
}
