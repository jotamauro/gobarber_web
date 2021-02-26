export interface User {
  id: string;
  // eslint-disable-next-line camelcase
  avatar_url: string;
  name: string;
  email: string;
}

export interface AuthContextData {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  token: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: User;
}

export interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(d: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}
