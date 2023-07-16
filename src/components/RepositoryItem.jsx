import { View, Image, Pressable, TouchableHighlight, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import * as WebBrowser from 'expo-web-browser';

import Text from './Text'
import theme from '../theme';
import { fullWidthButton } from '../theme';
import RepoStatistics from './RepoStatistics';

const Item = ({ repository }) => {
  const navigate = useNavigate();

  const onPress = () => {
    const path = "/singleRepo/" + repository.fullName.replace('/','.')
    navigate(path)
  }
  
  return  (
    <Pressable onPress={onPress}>
      <View testID='repositoryItem' style={styles.mainContainer}>
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
        <LinkButton repository={repository}/>
      </View>
    </Pressable>
  )
};

const LinkButton = ({repository}) => {
  const onButtonPress = () => {
    WebBrowser.openBrowserAsync(repository.url)
  }
  return (
    repository?.url ?
      <TouchableHighlight onPress={onButtonPress} style={styles.fullWidthButton}>
        <Text style={styles.text}>Open in GitHub</Text>
      </TouchableHighlight>
    :
      null)
}

const styles = StyleSheet.create({
  fullWidthButton,
  mainContainer: {
    padding: 10,
    flexDirection: 'column',
    backgroundColor: theme.colors.light,
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
    padding: 2,
    paddingHorizontal:5,
    borderRadius: 5,
    backgroundColor: '#16be94',
  },
  text:{
    color: theme.colors.light,
    textAlign: 'center',
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.button
  }
})

export default Item