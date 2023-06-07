import { StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  flexItem: {
        flexGrow: 1,
        backgroundColor: theme.colors.primary,
        marginHorizontal: 2,
        padding: 5
  }
});

const AppBarItem = ({ text }) => {
  return(
    <Pressable style={styles.flexItem} onPressIn={() => console.log('pressed')}>
      <Text color='light' fontSize='subheading' fontWeight='bold'>
        {text}
      </Text>
    </Pressable>
  )
}

export default AppBarItem