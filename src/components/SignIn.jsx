import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';
import AuthStorage from '../utils/authStorage';

const validationSchema = yup.object().shape({
  username: yup.string()
  .required('Username is required'),
  password: yup.string()
  .required('Password is required'),
});

const initialValues = {
  username: '',
  pwd: '',
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const authStore = new AuthStorage('authStore')

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      await authStore.setAccessToken(data.authenticate.accessToken)   
    } catch (e) {
      console.log(e);
    }
    
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn