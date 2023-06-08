import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// import theme from '../theme';
import AppBarItem from './AppBarItem';

const styles = StyleSheet.create({
  container: {
    height: 35,
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'lightgrey'
  }
});

const AppBar = () => {
  return <View style={styles.container}>
            <AppBarItem text='Repositories' to='/'/>
            <AppBarItem text='Sign-in' to="/sign-in"/>
          </View>;
};

export default AppBar;