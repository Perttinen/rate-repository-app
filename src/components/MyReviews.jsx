import { Text, View, StyleSheet } from "react-native"
import { FlatList } from "react-native"
import { useQuery } from "@apollo/client"

import { GET_ME } from "../graphql/queries"
import ReviewItem from "./ReviewItem"

const MyReviews = () => {
  const { loading, error, data, refetch } = useQuery(GET_ME, {
    variables: {includeReviews: true},
    fetchPolicy: 'cache-and-network'
  })

  error && console.log(error)


  const reviewNodes = data
  ? data.me.reviews.edges.map((edge) => {
    const repoHeader = edge.node.repositoryId.replace('.','/')
    return(
    {...edge.node, user: {repoHeader: repoHeader}}
    )
  })
  : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    loading ? <Text>Loading...</Text> :
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} ownReview={true} refetch={refetch}/>}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export default MyReviews