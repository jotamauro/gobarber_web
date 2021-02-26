import React, { FC } from 'react';
import { useTransition } from 'react-spring';
import { Toast } from './Toast';
import { Container } from './styles';
import { ToastContainerProps } from './typings';

// eslint-disable-next-line import/prefer-default-export
export const ToastContainer: FC<ToastContainerProps> = ({ messages }) => {
  const messageWithTransitions = useTransition(messages, (message) => message.id, {
    from: { right: '-120%' },
    enter: { right: '0%' },
    leave: { right: '-120%' },
  });

  return (
    <Container>
      {messageWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props}></Toast>
      ))}
    </Container>
  );
};
