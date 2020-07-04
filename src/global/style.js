import { DefaultTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

const globalTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#935390",
  },
};

export const globalStyle = StyleSheet.create({
  Shadow: {
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
});

export default globalTheme;
