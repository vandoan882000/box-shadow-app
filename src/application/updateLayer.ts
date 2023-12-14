import { BoxShadow } from 'domain/entities/boxShadow.entity';

export function updateLayer(boxShadows: BoxShadow[], boxShadow: BoxShadow) {
  return [...boxShadows.map(item => (item.id === boxShadow.id ? { ...item, ...boxShadow } : item))];
}
