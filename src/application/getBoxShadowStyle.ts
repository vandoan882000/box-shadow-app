import { BoxShadow } from 'domain/entities/boxShadow.entity';

export function getBoxShadowStyle(boxShadows: BoxShadow[]) {
  return boxShadows
    .map(item => `${item.horizontal}px ${item.vertical}px ${item.blur}px ${item.spread}px ${item.color}${item.inset ? ' inset' : ''}`)
    .join(', ');
}
