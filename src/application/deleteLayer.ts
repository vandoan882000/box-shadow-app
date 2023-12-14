import { BoxShadow } from 'domain/entities/boxShadow.entity';

export function deleteLayer(boxShadows: BoxShadow[], id: string) {
  return [...boxShadows.filter(item => item.id !== id)];
}
