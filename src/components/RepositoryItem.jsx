import { View } from 'react-native';
import Text from './Text'

const Item = ({repository}) => {
  return(
  <View >
    <Text fontWeight="bold" fontSize="subheading">Full name: {repository.fullName}</Text>
    <Text  color="textSecondary">Description: {repository.description}</Text>
    <Text color="primary">Language: {repository.language}</Text>
    <Text>Stars: {repository.stargazersCount}</Text>
    <Text>Forks: {repository.forksCount}</Text>
    <Text>Reviews: {repository.reviewCount}</Text>
    <Text>Rating: {repository.ratingAverage}</Text>
  </View>
  )
  };

export default Item