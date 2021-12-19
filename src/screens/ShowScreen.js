 
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons';

export default function ShowScreen() {
    const {state}=useContext(Context)
    const route = useRoute();
    const blogPost=state.find((blogPost=>blogPost?.id===route.params.id));
    const navigation = useNavigation();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <TouchableOpacity
             onPress={()=>navigation.navigate("Edit",{id:route.params.id})
            
            }><Entypo name="edit" size={24} color="black" /></TouchableOpacity> 
        });
    }, [navigation]);

  return (
      
    <View >
      

      <Text>Title:{blogPost.title}</Text>
      <Text>Content:{blogPost.content}</Text>

     
     
    </View>
  );
}

const styles = StyleSheet.create({ 
  
});
