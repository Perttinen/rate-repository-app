import { View, Pressable, StyleSheet } from "react-native";

import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  inn:{  
    margin:10,
    marginBottom:5,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10,
  },
  button: {
    margin: 10,
    flexDirection: 'row',
    color: theme.colors.light,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10
  }
})
const SignInForm = ({ onSubmit }) => { 
  return (
    <View style={styles.container}>
       <FormikTextInput name="username" placeholder="Username" style={styles.inn} /> 
       <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" style={styles.inn}/> 
       <View style={styles.button}>
        <Pressable onPress={onSubmit}>
          <Text color='light' fontSize='subheading' fontWeight='bold'>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignInForm