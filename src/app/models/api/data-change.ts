export interface DataChange<Entity> {
  changes: Partial<Entity>;
  author: string;
  created_at: string;
}
