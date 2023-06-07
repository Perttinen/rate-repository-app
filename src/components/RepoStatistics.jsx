import { View, StyleSheet } from "react-native"
import Text from "./Text"

const RepoStatistics = ({repository}) => {

  const styles = StyleSheet.create({

    columnContainer:{

      flexDirection: 'column',
      // justifyContent: 'flex-start',
      
    },
    rowContainer:{
      flexDirection: 'row',
      justifyContent: "space-around"
    },

  })

const formatNumber = (numAsText) =>{
  let num = parseFloat(numAsText)
  if (num > 1000){
    num = Math.round(num/1000*10)/10
    return num.toString() + 'k'
  }
  return numAsText
}

  return(
    <View style={styles.rowContainer}>
    <View style={styles.columnContainer}>
      <Text fontWeight='bold'>{formatNumber(repository.stargazersCount)}</Text>
      <Text >Stars</Text>
    </View>
    <View style={styles.columnContainer}>
      <Text fontWeight='bold'>{formatNumber(repository.forksCount)}</Text>
      <Text>Forks</Text>
    </View>
    <View style={styles.columnContainer}>
      <Text fontWeight='bold'>{formatNumber(repository.reviewCount)}</Text>
      <Text>Reviews</Text>
    </View>
    <View style={styles.columnContainer}>
      <Text fontWeight='bold'>{formatNumber(repository.ratingAverage)}</Text>
      <Text>Rating</Text>
    </View>
  </View>
  )
}

export default RepoStatistics