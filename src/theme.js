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
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  alignContent: "center",
  backgroundColor: theme.colors.primary,
  borderRadius: 5,
  borderWidth: 4,
  borderColor: theme.colors.primary,
}

export default theme;