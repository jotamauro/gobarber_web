// eslint-disable-next-line object-curly-newline
import React, { createContext, FC, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';
import { ToastContainer } from '../components/ToastContainer';
import { ToastContextData, ToastMessage } from './typings';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

// eslint-disable-next-line import/prefer-default-export
export const ToastProvider: FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((oldMessages) => [...oldMessages, toast]);
    },
    [messages],
  );

  const removeToast = useCallback((id: string) => {
    setMessages((oldMessages) => oldMessages.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
