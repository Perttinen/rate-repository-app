
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';

import CreateReviewForm from './CreateReviewForm';
import { REVIEW } from '../graphql/mutations';

const CreateReview = () => {
  const navigate = useNavigate();
  const [mutate] = useMutation(REVIEW);

  const onSubmit = async (values) => {
    try{
    const review = {...values, rating: parseInt(values.rating)}
    const repoId = await mutate({variables: {review}})
    const path = "/singleRepo/" + repoId.data.createReview.repository.id;
    navigate(path)
    }catch(e){
      alert(e)
    }
  };
  return <CreateReviewContainer onSubmit={onSubmit}/>
}

export default CreateReview

const validationSchema = yup.object().shape({
  ownerName: yup.string()
  .required('Username is required'),
  repositoryName: yup.string()
  .required('Password is required'),
  rating: yup.number()
  .min(0)
  .max(100),
  review: yup.string()
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

export const CreateReviewContainer = ({onSubmit}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
}
