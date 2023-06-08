import { StyleSheet, View } from 'react-native';
import {Route, Routes, Navigate} from 'react-router-native'
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import Bmi from './Bmi';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,   
    flexShrink: 1,
    backgroundColor: 'lightgrey'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path="/bmi" element={<Bmi />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main; 