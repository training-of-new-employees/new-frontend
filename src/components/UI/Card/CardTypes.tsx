export interface ICard {
  mode: 'course' | 'role';
  name: string;
  courses?: number;
  personal?: number;
  lesson?: number;
  status?: string;
}
