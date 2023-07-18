import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = (order, searchQuery) => {

  let variables = null
  switch (order) {
    case 1:
      variables = { orderBy: "CREATED_AT",orderDirection: "DESC"}
      break;
    case 2:
      variables = {orderBy: "RATING_AVERAGE",orderDirection: "DESC"}
      break;
    case 3:
      variables = { orderBy: "RATING_AVERAGE",orderDirection: "ASC"}
      break;
    default:
      variables = { orderBy: "CREATED_AT",orderDirection: "DESC"}
  }

  if(searchQuery) variables = {...variables, searchKeyword: searchQuery}

  const result = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network'
  })

  if(result.loading){
    return []
  }

  return {
    repositories: result.data.repositories,
    loading: result.loading,
    refetch: result.refetch
  }
}

export default useRepositories

