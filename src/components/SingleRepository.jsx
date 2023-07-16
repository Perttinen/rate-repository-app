import { Text } from "react-native";
import { useParams } from "react-router-native";
import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries'
import Item from "./RepositoryItem";

const SingleRepository  = () => {
  const id = useParams().id
  const {data, loading} = useQuery(GET_REPOSITORY, {
    variables: {
      "repositoryId": id
    }, 
    fetchPolicy: 'cache-and-network'}
  )

  return( 
    loading ? <Text>Loading...</Text> :
    <Item repository={ data.repository } />
  )
}

export default SingleRepository