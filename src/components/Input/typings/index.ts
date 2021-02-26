import { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
  containerStyle?: {
    marginTop: string;
  };
}

export interface ContainerPros {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
