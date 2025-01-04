import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'
          screenOptions={{
            headerStyle :{ backgroundColor : '#e2bee2' },
          }}
          >
            <Stack.Screen name='home' component={Home} options={{title: "Welcome"}} />
            <Stack.Screen name='contact' component={ContactUs} options={{title: "Contact Us"}} />
            <Stack.Screen name='aboutus' component={AboutUs} options={{title: "About Us"}} />

          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


