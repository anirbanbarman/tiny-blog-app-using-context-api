import { StyleSheet, Text, View } from 'react-native';
import IndexScreen from './src/screens/indexScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider as BlogProvider} from "./src/context/BlogContext";
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const App=() =>{
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={IndexScreen} options={{title:"Blog"}} />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen } />
        <Stack.Screen name="Edit" component={EditScreen } />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default ()=>{
  return <BlogProvider><App/></BlogProvider> 
}
