import { Button, StyleSheet, Text, View, Pressable, Keyboard } from 'react-native';

//Components
import Titulo from './src/components/title/Title';
import From from './src/components/form/resultimc/From';
import Historic from './src/components/historic/Historic';

//navigation
import {NavigationContainer}  from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <NavigationContainer> 
        <Stack.Navigator initialRouteName="From">
          <Stack.Screen name="From" component={From} />
          <Stack.Screen name="Historic" component={Historic} />
        </Stack.Navigator>
      </NavigationContainer>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f47709',
    paddingTop: 50,
    borderRadius: 30,
  },
});