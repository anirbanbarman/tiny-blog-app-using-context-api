 
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, View} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

export default function EditScreen({id}) {
    const route = useRoute();
    const navigation=useNavigation()
    const {state,editBlogPost}=useContext(Context);
    const blogPost=state.find((blogPost=>blogPost.id===route.params.id));
 

  return (
      

     <View >
    <BlogPostForm
     initialValues={{title:blogPost.title,content:blogPost.content}}
      onSubmit={(title,content)=>{
       editBlogPost(route.params.id,title,content,()=>navigation.goBack())

      }}/>
   </View>
  );
}

const styles = StyleSheet.create({ 
  
});
