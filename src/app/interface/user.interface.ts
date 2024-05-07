export interface user {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  hobbies: string;
  role: 'user';
  isActive: boolean;
}
