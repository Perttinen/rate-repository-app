import { StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../theme';
import Text from './Text';

const AppBarItem = ({ to, onPress, children}) => {

  return onPress ? (
    <Pressable onPress={onPress} style={styles.flexItem}>
      <Text color='light' fontSize='subheading' fontWeight='bold' >
        {children}
      </Text>
    </Pressable>
  ) : (
    <Link to={to} style={styles.flexItem}>
      <Text color='light' fontSize='subheading' fontWeight='bold'>
        {children}
      </Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  flexItem: {
    backgroundColor: theme.colors.darkBackground,
    marginHorizontal: 2,
    padding: 8,
  }
});

export default AppBarItem