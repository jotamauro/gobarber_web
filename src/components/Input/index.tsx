/* eslint-disable object-curly-newline */

import React, { FC, useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';
import { InputProps } from './typings';

const Input: FC<InputProps> = ({ name, containerStyle = {}, icon: Icon, ...rest }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [, setIsErrored] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
    setIsErrored(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container style={containerStyle} isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}

      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}></input>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
