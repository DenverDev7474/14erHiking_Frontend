import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AuthStack from './src/utils/authStack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/state/store/store';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const myNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    notification: 'rgba(255, 255, 255, 0.5)',
    secondaryContainer: 'transparent',
  },
};

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          openSans: require("./src/assets/fonts/OpenSans-Regular.ttf"),
          openSansBold: require("./src/assets/fonts/OpenSans-Bold.ttf"),
          robotoSlab: require("./src/assets/fonts/RobotoSlab-Bold.ttf"),
          robotoSlabLight: require("./src/assets/fonts/RobotoSlab-Light.ttf"),
        });

        setFontLoaded(true);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        // Hide the splash screen whether there is an error or not
        await SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!fontLoaded) {
    // Consider showing some fallback content or a loading indicator
    return null;
  }

  return (
    <PaperProvider theme={myNavigationTheme}>
      <Provider store={store}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}

// Styles remain unchanged
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
