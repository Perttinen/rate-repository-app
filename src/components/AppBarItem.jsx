import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  flexItem: {
        flexGrow: 1,
        backgroundColor: theme.colors.primary,
        marginHorizontal: 2,
        padding: 5
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