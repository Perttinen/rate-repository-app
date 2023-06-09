import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarItem from './AppBarItem';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.mainBackgroud 
  }
});

const AppBar = () => {
  return(
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarItem text='Repositories' to='/'/>
        <AppBarItem text='Sign in' to="/sign-in"/>
        <AppBarItem text='BMI' to="/bmi"/>
      </ScrollView>
    </View>
  )
};

export default AppBar;