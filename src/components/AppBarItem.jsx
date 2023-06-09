import { StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  flexItem: {
    backgroundColor: theme.colors.darkBackground,
    marginHorizontal: 2,
    padding: 8,
  }
});

const AppBarItem = ({ text, to }) => {

  return(   
    <View style={styles.flexItem}>
      <Link to={to}>
        <Text color='light' fontSize='subheading' fontWeight='bold'>
          {text}
        </Text>
      </Link>
    </View>
  )
}

export default AppBarItem