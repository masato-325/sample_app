import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsScreen from './Screens/NewsScreen';
import ShowScreen from './Screens/ShowScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ニュースページ" component={NewsScreen} />
        <Stack.Screen name="詳細ページ" component={ShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;