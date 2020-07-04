import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { StatusBar, YellowBox } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import globalTheme from "./global/style";

YellowBox.ignoreWarnings(["Animated:"]);

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={globalTheme}>
        <StatusBar barStyle="light-content" backgroundColor="#935390" />
        <Routes />
      </PaperProvider>
    </Provider>
  );
}
