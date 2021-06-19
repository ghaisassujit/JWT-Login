import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import authenticationService from '../services/AuthenticationService';
import { FormField, Wrapper } from './Login.style';

const Login: React.FC = () => {
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
      }
    });
  };

  return (
    <Wrapper>
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
            <ErrorMessage name="email" />
          </FormField>
          <FormField>
            <label>Password</label>
            <Field type="text" name="password" placeholder="password" />
            <ErrorMessage name="password" />
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
