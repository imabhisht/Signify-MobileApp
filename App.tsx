import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme}/>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
