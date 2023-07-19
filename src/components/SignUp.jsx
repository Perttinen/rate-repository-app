import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../graphql/mutations';

import SignUpForm from './SignUpForm';
import useSignIn from '../hooks/useSignIn';

const SignUp = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [createUser] = useMutation(CREATE_USER)

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await createUser({variables:{user:{username: username, password: password}}})
    } catch (e) {
      alert(e)
    }

    try {
      await signIn({ username, password });
      navigate('/')
    } catch (e) {
      alert(e)
    }
  };
  return <SignInContainer onSubmit={onSubmit}/>
};


const validationSchema = yup.object().shape({
  username: yup.string()
  .required('Username is required'),
  password: yup.string()
  .required('Password is required'),
  passwordConfirmation: yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match')
  .required('Password confirm is required')
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

export const SignInContainer = ({onSubmit}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

export default SignUp