import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = () => {

  const result = useQuery(GET_REPOSITORIES, {
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



// import { useState, useEffect } from 'react';

// const useRepositories = () => {
//   const [repositories, setRepositories] = useState();
//   const [loading, setLoading] = useState(false);

//   const fetchRepositories = async () => {
//     setLoading(true);

//     const response = await fetch('http://192.168.1.120:5000/api/repositories');
//     const json = await response.json();

//     setLoading(false);
//     setRepositories(json);
//   };

//   useEffect(() => {
//     fetchRepositories();
//   }, []);

//   return { repositories, loading, refetch: fetchRepositories };
// };

// export default useRepositories;

