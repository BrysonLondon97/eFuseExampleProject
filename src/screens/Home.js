import React, {useState, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Keyboard, ScrollView, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen')
import { SafeAreaView } from 'react-native-safe-area-context';
import NewPost from '../components/NewPost';
import Post from '../components/Post'
import {Context as ProfileContext} from '../context/ProfileContext';
import moment from 'moment'
//import { FlatList } from 'react-native-gesture-handler';



const Home = () => {
    {/*UserDate context/provider that keeps track of username, usertitle, posts */}
    const {state, newPost, addComment} = useContext(ProfileContext);
    const [content, setContent] = useState('');
    

    //console.log({state})
    {/*Not good practice to put flatList inside of ScrollView, but it kept making me tap the screen before I was able to tap the post button*/}
    return <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: 'rgb(218, 225, 234)' }}>
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
                data={state}
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