import { ToastMessage } from '../../../hooks/typings';

export interface ToastProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: number;
}

export interface ToastContainerProps {
  messages: ToastMessage[];
}
