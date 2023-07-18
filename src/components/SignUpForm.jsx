import { View, StyleSheet, Text, TouchableHighlight} from "react-native";

import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import { fullWidthButton } from "../theme";

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
       <FormikTextInput name="username" placeholder="Username" style={styles.input} /> 
       <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" style={styles.input}/> 
       <FormikTextInput secureTextEntry={true} name="passwordConfirmation" placeholder="Password confirmation" style={styles.input}/> 
        <TouchableHighlight onPress={onSubmit} style={styles.fullWidthButton}>
          <Text style={styles.text}> Sign up</Text>
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

export default SignUpForm