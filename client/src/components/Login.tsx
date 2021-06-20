import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import authenticationService from '../services/AuthenticationService';
import { ErrorText, FormField, Wrapper } from './Login.style';

const Login: React.FC = () => {
  const [error, setError] = useState('');
  let history = useHistory();
  const LoginValidation = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(8)
      .max(16)
      .required(),
  });

  const authenticateAndRedirect = (email: string, password: string) => {
    authenticationService.login(email, password, (error, success) => {
      if (success) {
        history.push('/');
      } else if (error) {
        setError(error);
      }
    });
  };

  return (
    <Wrapper>
      <ErrorText>
        <label>{error}</label>
      </ErrorText>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={LoginValidation}
        onSubmit={values => {
          authenticateAndRedirect(values.email, values.password);
        }}
      >
        <Form>
          <FormField>
            <label>Username/email</label>
            <Field type="text" name="email" placeholder="email" />
            <ErrorText>
              <ErrorMessage name="email" />
            </ErrorText>
          </FormField>
          <FormField>
            <label>Password</label>
            <Field type="password" name="password" placeholder="password" />
            <ErrorText>
              <ErrorMessage name="password" />
            </ErrorText>
          </FormField>
          <FormField>
            <button type="submit">Login</button>
          </FormField>
        </Form>
      </Formik>
    </Wrapper>
  )
}
export default Login;
