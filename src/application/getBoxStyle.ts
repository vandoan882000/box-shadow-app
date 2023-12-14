import { Box } from 'domain/entities/box.entity';

export function getBoxStyle(box: Box) {
  return { width: `${box.width}px`, height: box.height, borderRadius: box.radius, backgroundColor: box.color };
}
