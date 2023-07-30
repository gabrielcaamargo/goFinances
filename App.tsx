import { ThemeProvider } from 'styled-components';
import Dashboard from './src/screens/Dashboard';
import theme from './src/global/styles/theme';

import {
  useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { View, ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return (
      <View style={{
        flex: 1, alignItems: 'center', justifyContent: 'center'
      }}>
        <ActivityIndicator size={64} />
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
