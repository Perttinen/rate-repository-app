import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e', // dark-grayish
    textSecondary: '#586069', // grayish
    primary: '#4264e0', //blueish
    darkBackground: '#3b454f', // dark-grayish
    light: '#ffffff', // white
    mainBackgroud: '#aec2d0', // bluegrayish
    inputBorder: '#3b454f',
    error: '#d73a4a', // red
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    button: 18,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },

};

export const fullWidthButton = {
  justifyContent: 'center',
  alignContent: "center",
  height: 40,
  backgroundColor: theme.colors.primary,
  borderRadius: 5,
}

export const input = {
  marginBottom:10,
  borderColor: theme.colors.inputBorder,
  borderWidth: 2,
  borderRadius: 5,
  padding: 5,
  paddingLeft: 10,
  height:40
}

export default theme;