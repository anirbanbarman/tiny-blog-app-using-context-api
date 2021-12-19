
import React, { useContext, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';



export default function IndexScreen() {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context)
    const navigation = useNavigation();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <TouchableOpacity
                onPress={() => navigation.navigate("Create")

                }><Entypo name="add-to-list" size={24} color="black" /></TouchableOpacity>
        });
    }, [navigation]);

    useEffect(() => {
        getBlogPosts();
        // const unsubscribe = navigation.addListener('focus', () => {
        //     getBlogPosts();
        //   });
        //    return unsubscribe;
       
    }, []);
    

    return (

        <View >
            {/* <Button title='Add Post' onPress={addBlogPost} /> */}
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost?.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
                            <View style={styles.row}>
                                <Text>{item.title}</Text>
                                <Text>{item.content}</Text>
                                <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                                    <Entypo name="trash" size={24} color="black" />

                                </TouchableOpacity>

                            </View>
                        </TouchableOpacity>)


                }}
            />


        </View>
    );
}
IndexScreen.options = () => {
    return {
        headerRight: <Entypo name="add-to-list" size={24} color="black" />

    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 10

    },
    title: {
        fontSize: 18
    }

});

