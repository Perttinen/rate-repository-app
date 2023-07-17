import { Text, FlatList, View, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries'
import { GET_REVIEWS } from "../graphql/queries";
import Item from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const SingleRepository  = () => {
  const id = useParams().id
  const repository = useQuery(GET_REPOSITORY, {
    variables: { "repositoryId": id }, 
    fetchPolicy: 'cache-and-network'}
  )

  console.log(repository);

  const reviews = useQuery(GET_REVIEWS, {
    variables: {
      "repositoryId": id
    }, 
    fetchPolicy: 'cache-and-network'}
  )

  const reviewNodes = reviews.data
  ? reviews.data.repository.reviews.edges.map((edge) => edge.node)
  : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return( 
    <FlatList
    data={reviewNodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({ item }) => <ReviewItem review={item}/>}
    keyExtractor={({ id }) => id}
    ListHeaderComponent={() => <RepositoryInfo repository={repository}/>}
  />
  )
}

const RepositoryInfo = ({repository}) => {
  return(
    repository.loading ? <Text>Loading...</Text> :
    <View style={{marginBottom:10}}>
      <Item repository={ repository.data.repository } />
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export default SingleRepository