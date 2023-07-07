import { useApolloClient, useMutation } from '@apollo/client';

import { AUTHENTICATE } from '../graphql/mutations';
import { useAuthStorage } from '../hooks/useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password }

    const authData = await mutate({ variables: { credentials} });
    const {data} = authData;

    if (data?.authenticate){
      await
        authStorage.setAccessToken(data.authenticate.accessToken);
    }

    apolloClient.resetStore();
    return authData;
  };

  return [signIn, result];
};

export default useSignIn