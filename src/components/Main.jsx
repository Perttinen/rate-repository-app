import { StyleSheet, View } from 'react-native';
import {Route, Routes, Navigate} from 'react-router-native'
import { StatusBar } from 'expo-status-bar';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import theme from '../theme';

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path="/singleRepo/:id" element={<SingleRepository/>} exact />
        <Route path="/createReview" element={<CreateReview />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <StatusBar style='auto'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,   
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackgroud
  },
});

export default Main; 