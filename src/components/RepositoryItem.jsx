import { View, Image } from 'react-native';
import Text from './Text'

import { StyleSheet } from 'react-native';
import theme from '../theme';

import RepoStatistics from './RepoStatistics';

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  columnContainer:{
    flex:1,
    flexDirection: 'column',
    padding: 5,
  },
  rowContainer:{
    flexDirection: 'row',
  },
  image: {   
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,  
  },
  tag: {
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  }
})

const Item = ({repository}) => {
  return(
  <View style={styles.mainContainer}>
    <View style={styles.rowContainer}>
      <Image 
        style={styles.image}
        source={{uri: repository.ownerAvatarUrl,}}
      />
      <View style={styles.columnContainer}>
        <Text fontWeight="bold" fontSize="subheading"> {repository.fullName}</Text>
        <Text  color="textSecondary"> {repository.description}</Text>
        <View style={styles.tag}>
          <Text color='light'>{repository.language}</Text>
        </View>
      </View>
    </View>
    <RepoStatistics repository={repository}/>
  </View>
  )
  };

export default Item