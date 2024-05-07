import { user } from './user.interface';

export interface admin {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  hobbies: string;
  role: 'admin';
  isActive: boolean;
  users: user[];
}
