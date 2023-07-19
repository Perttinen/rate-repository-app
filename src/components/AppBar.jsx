import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery, useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import theme from '../theme';
import AppBarItem from './AppBarItem';
import { GET_ME } from '../graphql/queries';
import { useAuthStorage } from '../hooks/useAuthStorage';

const AppBar = () => {
const navigate = useNavigate()
const authStorage = useAuthStorage()
const apolloClient = useApolloClient()

const {data} = useQuery(GET_ME, {
  fetchPolicy: 'cache-and-network'
})

const currentUser = data?.me;

const handleSignOut = async () => {
  navigate('/')
  await authStorage.removeAccessToken()
  await apolloClient.resetStore()
  console.log('signed out');
};

const path = "/createReview/" + currentUser

  return(
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarItem to="/">Repositories</AppBarItem>
        {currentUser && <AppBarItem to={path}>Create a review</AppBarItem>}
        {currentUser && <AppBarItem to="/myReviews">My reviews</AppBarItem>}
        {currentUser ? (
          <AppBarItem onPress={handleSignOut}>Sign out</AppBarItem>
        ) : (
          <AppBarItem to="/sign-in">Sign in</AppBarItem>
        )}
        {!currentUser && <AppBarItem to="/sign-up">Sign up</AppBarItem>}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.mainBackgroud 
  }
});

export default AppBar;