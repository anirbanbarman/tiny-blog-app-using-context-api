 import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';


export default function BlogPostForm({onSubmit,initialValues}) {
    const [title,setTitle]=useState(initialValues?.title);
    const [content,setContent]=useState(initialValues?.content);
  return (
      
    <View >
    <Text style={styles.level}>Enter Title:</Text>
    <TextInput style={styles.textInput} value={title} onChangeText={(text)=>setTitle(text)} />
    <Text style={styles.level}>Enter Content:</Text>
    <TextInput style={styles.textInput} value={content} onChangeText={(text)=>setContent(text)} />
    <Button title="Save"
     onPress={()=>{
        onSubmit(title,content)
        }}/>

 </View>
  );
}

BlogPostForm.defaultProps={
    initialvalues:{
        title:"",
        content:""
    }
}

const styles = StyleSheet.create({ 
    textInput:{
      fontSize:18,
      borderColor:"black",
      borderWidth:1,
      marginHorizontal:10,
      paddingVertical:5,
      marginVertical:5
      
  
    
      
    },
    level:{
      fontSize:18,
      fontWeight:'bold',
      marginHorizontal:10,
     
    }
    
  });
  