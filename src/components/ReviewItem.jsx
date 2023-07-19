import { StyleSheet, View, Text, TouchableHighlight } from "react-native"
import { format } from "date-fns"
import * as WebBrowser from 'expo-web-browser';
import { useMutation } from "@apollo/client";

import theme from "../theme"
import { DELETE_REVIEW } from "../graphql/mutations";

const ReviewItem = ({review, ownReview, refetch}) => {
  const [mutate] = useMutation(DELETE_REVIEW)
  const reviewDate = format(new Date(review.createdAt), 'dd.MM.yyyy')

  const viewRepository = () => {
    WebBrowser.openBrowserAsync(review.repository.url)
  }

  const deleteRepository = async () => {
    if(window.confirm('Delete review?')){
      try{
        await mutate({variables: {"deleteReviewId": review.id}})
        refetch({includeReviews: true})
      }catch(e){
        alert(e)
      }
    }
  }

  return( 
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.rating}>
          <Text style={styles.text}>{review.rating}</Text>
        </View>
        <View style={styles.columnContainer}>
          <Text style={{fontWeight:theme.fontWeights.bold, fontSize: theme.fontSizes.subheading}}>{review.user.repoHeader}</Text>
          <Text style={{marginTop:5}}>{reviewDate}</Text>
          <Text style={{marginTop:5}}>{review.text}</Text>
        </View>
      </View>
      {ownReview && <View style={styles.buttonsContainer}>
        <TouchableHighlight style={{...styles.button, backgroundColor:'#348bda'}} onPress={viewRepository}>
          <Text style={styles.buttonText}>View repository</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{...styles.button, backgroundColor:'#ec3d3d'}} onPress={deleteRepository}>
          <Text style={styles.buttonText}>Delete review</Text>
        </TouchableHighlight>
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    flexDirection: 'column',
    flexGrow: 0,
    backgroundColor: theme.colors.light,
  },
  rowContainer:{
    flex:1,
    flexDirection: 'row',
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
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    gap: 20,
  },
  button: {
    borderRadius: 5,
    flexGrow: 1,
    height: 40,
    justifyContent: "center"
  },
  buttonText: {
    alignSelf: 'center',
    color: theme.colors.light,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.button
  }
})

export default ReviewItem