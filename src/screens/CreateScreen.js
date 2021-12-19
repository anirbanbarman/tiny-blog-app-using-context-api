 
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {  StyleSheet, View} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';



export default function CreateScreen() {
  const navigation=useNavigation()
  
    const {addBlogPost}=useContext(Context);
  return (
      
    <View >
      <BlogPostForm onSubmit={(title,content)=>{
       addBlogPost(title,content,()=>navigation.navigate("Index",))

      }}/>
     </View>
  );
}

const styles = StyleSheet.create({ 
 
});
