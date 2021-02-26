/* eslint-disable object-curly-newline */
import React, { FC, useCallback, useRef } from 'react';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Container, Background, Content, AnimationContainer } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/Toats';
import { ResetPasswordFormData } from './typings';
import api from '../../services/apiClient';

// eslint-disable-next-line import/prefer-default-export
export const ResetPassword: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { addToast } = useToast();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/ban-types
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'As senhas não conferem ',
          ),
        });

        await schema.validate(data, { abortEarly: false });

        const { passwordConfirmation, password } = data;
        const params = new URLSearchParams(window.location.search);
        const tokenToRecoverPassword = params.get('token');

        await api.post('/password/reset', {
          password,
          passwordConfirmation,
          token: tokenToRecoverPassword,
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao resetar senha',
          description: 'Ocorreu um erro ao resetar sua senha.',
        });
      }
    },
    [addToast, history],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo}></img>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>

            <Input icon={FiLock} name="password" placeholder="Nova senha" type="password"></Input>
            <Input
              icon={FiLock}
              name="passwordConfirmation"
              placeholder="Confirmação de senha"
              type="password"></Input>

            <Button type="submit">Alterar minha senha</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
