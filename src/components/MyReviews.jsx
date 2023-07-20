import { FlatList } from "react-native"

import ReviewItem from "./ReviewItem"
import useMyReviews from "../hooks/useMyReviews"
import ItemSeparator from "./ItemSeparator"

const MyReviews = () => {

  const { data, refetch } = useMyReviews()

  const reviewNodes = data
  ? data.me.reviews.edges.map((edge) => edge.node)
  : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} ownReview={true} refetch={refetch}/>}
    />
  );
}

export default MyReviews