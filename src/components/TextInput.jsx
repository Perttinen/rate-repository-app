import { TextInput as NativeTextInput, StyleSheet} from 'react-native';

import theme from '../theme';

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style,
    error && styles.errorStyle
  ];
  return <NativeTextInput style={textInputStyle} {...props}  />;
};

const styles = StyleSheet.create({
  errorStyle: {
    borderColor: theme.colors.error
  }
});

export default TextInput;