import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// import theme from '../theme';
import AppBarItem from './AppBarItem';

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'grey'
  }
});

const AppBar = () => {
  return <View style={styles.container}>
            <AppBarItem text='Repositories'/>
            <AppBarItem text='joo'/>
          </View>;
};

export default AppBar;