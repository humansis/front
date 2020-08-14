export interface DataChange<Entity> {
  changes: Partial<Entity>;
  author: string;
  createdAt: string;
}
