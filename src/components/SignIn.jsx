import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';


import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup.string()
  .required('Username is required'),
  password: yup.string()
  .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

export const SignInContainer = ({onSubmit}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(username);
       
    try {
      await signIn({ username, password });
      navigate('/')
    } catch (e) {
      console.log('error: ',e);
    }
  };
  return <SignInContainer onSubmit={onSubmit}/>
};

export default SignIn