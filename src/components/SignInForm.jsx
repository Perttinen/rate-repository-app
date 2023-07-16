import { View, StyleSheet, Text, TouchableHighlight} from "react-native";

import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import { fullWidthButton } from "../theme";

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
       <FormikTextInput testID='username' name="username" placeholder="Username" style={styles.input} /> 
       <FormikTextInput testID='password' secureTextEntry={true} name="password" placeholder="Password" style={styles.input}/> 
        <TouchableHighlight onPress={onSubmit} style={styles.fullWidthButton}>
          <Text style={styles.text}> Sign in</Text>
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

export default SignInForm