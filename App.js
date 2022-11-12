import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View,TouchableOpacity, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewProduct from './screens/NewProduct';
import Updatescreen from './screens/Updatescreen';



const Stack = createNativeStackNavigator();


export default function App() {
  
  
  
  return (
    
          <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="product" component={NewProduct} />
        <Stack.Screen name="update" component={Updatescreen} />

      </Stack.Navigator>
    </NavigationContainer>

    
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
    backgroundColor: '#ecf0f1',
    width:'100%'
  }
});
