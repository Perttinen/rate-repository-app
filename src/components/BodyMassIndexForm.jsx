import { View, Pressable, StyleSheet } from "react-native";

import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    backgroundColor: theme.colors.light,
    justifyContent: 'space-evenly',
  },
  input:{
    margin:10,
    marginBottom:5,
    borderColor: theme.colors.inputBorder,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10
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

const BodyMassIndexForm = ({ onSubmit }) => { 
  return (
    <View style={styles.container}>
       <FormikTextInput name="mass" placeholder="Weight (kg)" style={styles.input} /> 
       <FormikTextInput name="height" placeholder="Height (m)" style={styles.input}/> 
       <View style={styles.button}>
        <Pressable onPress={onSubmit}>
          <Text color='light' fontSize='subheading' fontWeight='bold'>Calculate</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BodyMassIndexForm