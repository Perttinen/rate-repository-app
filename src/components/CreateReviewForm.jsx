import { View, StyleSheet, TouchableHighlight} from "react-native";

import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from './Text'
import { fullWidthButton, input } from "../theme";

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
       <FormikTextInput name="ownerName" placeholder="Repository owner name" style={styles.input} /> 
       <FormikTextInput name="repositoryName" placeholder="Repository name" style={styles.input}/> 
       <FormikTextInput name="rating" placeholder="Rating between 0 and 100" style={styles.input}/> 
       <FormikTextInput name="text" placeholder="Review" style={styles.input} 
        // multiline="true"
         /> 
        <TouchableHighlight onPress={onSubmit} style={styles.fullWidthButton}>
          <Text style={styles.text}>Create a review</Text>
        </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  fullWidthButton,
  input,
  container:{
    flexDirection: 'column',
    backgroundColor: theme.colors.light,
    justifyContent: 'space-evenly',
    padding:10,
  },
  text:{
    color: theme.colors.light,
    textAlign: 'center',
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.button
  }
})

export default CreateReviewForm