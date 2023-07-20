import { FlatList, View } from "react-native";
import { useParams } from "react-router-native";

import Item from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import useRepository from "../hooks/useRepository";
import ItemSeparator from "./ItemSeparator";

const SingleRepository  = () => {
  const id = useParams().id
  let variables = {
    "repositoryId": id,
    "first": 4
  }
  const {repository, fetchMore, loading} = useRepository(variables)

  const reviewNodes = !loading
  ? repository.reviews.edges.map((edge) => edge.node)
  : [];

  const onEndReach = () => {
    fetchMore();
  };

  return( 
    loading ? null :
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item}/>}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository}/>}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

const RepositoryInfo = ({repository}) => {
  return(
    <View style={{marginBottom:10}}>
      <Item repository={ repository } />
    </View>
  )
}

export default SingleRepository