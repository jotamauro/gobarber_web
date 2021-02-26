import { ToastMessage } from '../../../../hooks/typings';

export interface ToastProps {
  message: ToastMessage;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object;
}
