import React, { FC } from 'react';
import { ButtonProps } from './typings';
import { Container } from './styles';

const Button: FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
