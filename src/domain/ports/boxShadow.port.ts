import { BoxShadow } from 'domain/entities/boxShadow.entity';

export interface BoxShadowPort {
  createBoxShadow(boxShadow: BoxShadow): void;
  updateBoxShadow(id: number, boxShadow: BoxShadow): void;
}
