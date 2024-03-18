export interface ICard {
  mode: 'course' | 'role';
  name: string;
  id: number;
  courses?: number;
  personal?: number;
  lesson?: number;
  status?: string;
  archived?: boolean;
  onClick?: () => void;
}
