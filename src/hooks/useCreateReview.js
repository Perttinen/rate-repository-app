import { useMutation } from "@apollo/client"

import { REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate] = useMutation(REVIEW);

  const createReview = async (values) => {
    try{
      const review = {...values, rating: parseInt(values.rating)}
      const repository = await mutate({variables: {review}})
      const path = "/singleRepo/" + repository.data.createReview.repository.id;
      return path
      }catch(e){
        alert(e)
      }
  }
  return createReview
}

export default useCreateReview