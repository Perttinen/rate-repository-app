import { StyleSheet, View, Text } from "react-native"
import { format } from "date-fns"

import theme from "../theme"

const ReviewItem = ({review}) => {
  const reviewDate = format(new Date(review.createdAt), 'dd.MM.yyyy')
  return(
    <View style={styles.mainContainer}>
      <View style={styles.rating}>
        <Text style={styles.text}>{review.rating}</Text>
      </View>
      <View style={styles.columnContainer}>
        <Text style={{fontWeight:theme.fontWeights.bold, fontSize: theme.fontSizes.subheading}}>{review.user.username}</Text>
        <Text style={{marginTop:5}}>{reviewDate}</Text>
        <Text style={{marginTop:5}}>{review.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flexDirection: 'row',
    flexGrow: 0,
    backgroundColor: theme.colors.light,
  },
  columnContainer:{
    marginLeft:5,
    flex:1,
    flexDirection: 'column',
    padding: 5,
  },
  text:{
    color: theme.colors.primary,
    includeFontPadding: false,
    textAlign: "center",
    paddingTop:6,
    fontSize: 26,
    fontWeight: theme.fontWeights.bold,
  },
  rating: {
    borderWidth:4,
    borderColor: theme.colors.primary,
    width:60,
    height: 60,
    borderRadius: 30
  }
})

export default ReviewItem