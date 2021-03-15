import React, {useState, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Keyboard, ScrollView, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen')
import { SafeAreaView } from 'react-native-safe-area-context';
import NewPost from '../components/NewPost';
import Post from '../components/Post'
import moment from 'moment'




const Home = () => {
    //content of the post, kept track by a state variable
    const [content, setContent] = useState('');
    //posts array that tracks post content 
    const [posts, setPosts] = useState([]);

    const newPost = (content, date) => {
        posts.push({content: content, date: date, userName: 'Bryson London', id: posts.length + 1, userTitle: 'Professional-Student' });
    };


    //console.log({state})

    {/*Not good practice to put flatList inside of ScrollView, but it kept making me tap the screen before I was able to tap the post button*/}
    return <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: 'rgb(218, 225, 234)', height }}>
        <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
            {/*Create Post Component*/}
            <NewPost 
                NewSubmit={() => {
                    
                    const date = new moment()
                    newPost(content, date)
                    setContent('')
                    Keyboard.dismiss()
                
                }}
                onValueChange={newValue => setContent(newValue)}
                content={content}
            />
            {/*List of Posts*/}
            <FlatList
                data={posts}
                inverted={true}
                keyExtractor={(item) => item.id.toString()}
                renderItem = {({item}) => {
                    if (item.content != null || item.content == '') {
                        return <Post 
                                    PostData={item}
                               />
                    }
                }}
                scrollEnabled={false}
            />
        </ScrollView>
        

    </SafeAreaView>

};

const styles = StyleSheet.create({});

export default Home;