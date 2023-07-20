import { useQuery } from "@apollo/client"

import { GET_ME } from "../graphql/queries"

const useMyReviews = () => {
  try{
    const { data, refetch } = useQuery(GET_ME, {
      variables: {includeReviews: true},
      fetchPolicy: 'cache-and-network'
    })
    return { data, refetch }
  }catch(e){
    alert(e)
  }
}

export default useMyReviews