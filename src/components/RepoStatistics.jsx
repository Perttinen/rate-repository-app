import { View, StyleSheet } from "react-native"

import StatItem from "./StatItem"

const RepoStatistics = ({repository}) => {

  const styles = StyleSheet.create({
    columnContainer:{
      flexDirection: 'column',
    },
    rowContainer:{
      flexDirection: 'row',
      justifyContent: "space-around"
    },
  })
  
  return(
    <View style={styles.rowContainer}>  
    <StatItem text='Stars' num={repository.stargazersCount}/>
    <StatItem text='Forks' num={repository.forksCount}/>
    <StatItem text='Reviews' num={repository.reviewCount}/>
    <StatItem text='Rating' num={repository.ratingAverage}/>
    </View>
  )
}

export default RepoStatistics