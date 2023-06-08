import { View, StyleSheet, ScrollView } from 'react-native';
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
  return(
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarItem text='Repositories' to='/'/>
        <AppBarItem text='Sign-in' to="/sign-in"/>
      </ScrollView>
    </View>
  )
};

export default AppBar;