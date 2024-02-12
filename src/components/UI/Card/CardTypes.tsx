export interface ICard {
  mode: 'role' | 'course';
  isValid?: boolean;
  onClick?: () => void;
}
