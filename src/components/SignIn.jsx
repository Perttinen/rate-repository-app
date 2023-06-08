import { Formik } from 'formik';

import SignInForm from './SignInForm';

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
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn