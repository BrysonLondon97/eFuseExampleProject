import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, TextInput} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Keyboard } from 'react-native';
const {width, height} = Dimensions.get('screen')

const NewPost = ({content, NewSubmit, onValueChange}) => {

    return <View style={styles.container} >
        {/*profile image, and text of the post */}
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'gray', height: height / 7}} >
            {/*Profile Image*/}
            <Image 
                source={require('../../assets/ProfileImage.jpeg')}
                style={styles.image}
            />
            {/*Text Box*/}
            <View style={{flex: 1, flexDirection: 'row'}} >
                <TextInput
                    placeholder='What is on your mind?'
                    autoCorrect = {false}
                    style={styles.input}
                    value = {content}
                    onChangeText = {onValueChange}
                    multiline = {true}
                    maxLength = {150}
                />
            </View>
            
        </View>

        {/*Buttons*/}
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}} >

            {/*Photo/Video button */}
            <TouchableOpacity
                style = {{backgroundColor: 'black', height: 30, width: 100, marginTop: 10, marginLeft: 15, borderRadius: 55, flexDirection: 'row'}}
            >
                <FontAwesome5 name="photo-video" size={15} color="white" style={{marginLeft: 10, marginTop: 7.5}} />
                <Text
                    style={{color: 'white', marginTop: 8, fontSize: 10}}
                >  Photo/Video</Text>
            </TouchableOpacity>

            {/*Post button */}
            <TouchableOpacity
                style = {{backgroundColor: 'rgb(143, 178, 247)', height: 35, width: 70, marginTop: 10, marginRight: 15, borderRadius: 5, flexDirection: 'row',  alignItems: 'center', justifyContent: 'center'}}
                onPress={() => {
                    {content == '' ? null : NewSubmit()}
                }}
            >
                <Text
                    style={{color: 'white', fontSize: 15, marginRight: 5}}
                >  Post It</Text>
            </TouchableOpacity>
        </View>
        
    </View>

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: height / 4.8,
        width: width - 20,
        margin: 10,
        borderRadius: 8,
        shadowRadius: 1,
        shadowColor: 'gray',
        shadowOffset: {height: 0},
        shadowOpacity: 1,
        flex: 1
    },
    image: {
        height: 50,
        width: 50,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 100
    },
    input: {
        flex: 1,
        alignSelf: 'flex-start',
        marginTop: 25,
        marginLeft: 10,
        marginRight: 10
    },
    spacer: {
        borderWidth: 5,
        borderColor: 'gray',
        width: width - 20
    }
});

export default NewPost;