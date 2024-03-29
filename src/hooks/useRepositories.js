import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = (order, searchQuery, first) => {
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

  variables = {...variables, first: first}

  const result = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network'
  }
  )

  const handleFetchMore = () => {
    const canFetchMore = !result.loading && result.data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    result.fetchMore({
      variables: {
        after: result.data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return(
    result.loading 
      ? [] 
      : {repositories: result.data.repositories,
        fetchMore: handleFetchMore,
        loading: result.loading,
        refetch: result.refetch
        }
  )
}

export default useRepositories

