import { Text, View, StyleSheet } from "react-native"
import { FlatList } from "react-native"
import { useQuery } from "@apollo/client"

import { GET_ME } from "../graphql/queries"
import ReviewItem from "./ReviewItem"

const MyReviews = () => {
  const currentUser = useQuery(GET_ME, {
    variables: {includeReviews: true},
    fetchPolicy: 'cache-and-network'
  })

  const reviewNodes = currentUser.data
  ? currentUser.data.me.reviews.edges.map((edge) => {
    const username = edge.node.repositoryId.replace('.','/')
    return(
    {...edge.node, user: {username: username}}
    )
  })
  : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    currentUser.loading ? <Text>Loading...</Text> :
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item}/>}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export default MyReviews