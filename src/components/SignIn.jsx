import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm';

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
  const onSubmit = values => {
    const username = values.username;
    // const pwd = values.pwd;

    console.log(`${username} Signed in!`);
    
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