import { View, StyleSheet } from "react-native"

import Text from "./Text"

const StatItem = ({text, num}) => {
  
  const formatNumber = (numAsText) =>{
    let num = parseFloat(numAsText)
    if (num > 1000){
      num = Math.round(num/1000*10)/10
      return num.toString() + 'k'
    }
    return numAsText
  }

  return(
    <View style={styles.columnContainer}>
      <Text style={styles.text} fontWeight='bold'>{formatNumber(num)}</Text>
      <Text style={styles.text}>{text}</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  columnContainer:{
    flexDirection: 'column',   
  },
  text:{
    alignSelf: 'center',
  }
})

export default StatItem