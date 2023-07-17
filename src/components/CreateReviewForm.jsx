import { View, StyleSheet, Text, TouchableHighlight} from "react-native";

import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import { fullWidthButton } from "../theme";

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
       <FormikTextInput name="ownerName" placeholder="Repository owner name" style={styles.input} /> 
       <FormikTextInput name="repositoryName" placeholder="Repository name" style={styles.input}/> 
       <FormikTextInput name="rating" placeholder="Rating between 0 and 100" style={styles.input}/> 
       <FormikTextInput name="text" placeholder="Review" style={styles.input} multiline="true" /> 
        <TouchableHighlight onPress={onSubmit} style={styles.fullWidthButton}>
          <Text style={styles.text}>Create a review</Text>
        </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  fullWidthButton,
  container:{
    flexDirection: 'column',
    backgroundColor: theme.colors.light,
    justifyContent: 'space-evenly',
    padding:10,
  },
  input:{  
    marginBottom:10,
    borderColor: theme.colors.inputBorder,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10,
  },
  text:{
    color: theme.colors.light,
    textAlign: 'center',
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.button
  }
})

export default CreateReviewForm