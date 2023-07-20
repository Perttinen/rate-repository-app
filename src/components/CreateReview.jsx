
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import CreateReviewForm from './CreateReviewForm';
import useCreateReview from '../hooks/useCreateReview';

const CreateReview = () => {
  const navigate = useNavigate();
  const createReview = useCreateReview()
  
  const onSubmit = async (values) => {
    const path = await createReview(values)
    navigate(path)
  };
  return <CreateReviewContainer onSubmit={onSubmit}/>
}

export default CreateReview

const validationSchema = yup.object().shape({
  ownerName: yup.string()
  .required('Owner is required'),
  repositoryName: yup.string()
  .required('Repository name is required'),
  rating: yup.number()
  .min(0)
  .max(100)
  .required('Rating is required'),
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
