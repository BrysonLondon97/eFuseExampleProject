import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

const CommentActions = ({id, deleteComment, editComment}) => {
    const [isLiked, setIsLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const animation = useRef(null)
    const isFirstRun = useRef(null)
    

    {/*lottie animation "function" */}
    useEffect(() => {
        if (isFirstRun.current) {
            if (isLiked) {
              animation.current.play(66, 66);
            } else {
              animation.current.play(19, 19);
            }
            isFirstRun.current = false;
          } else if (isLiked) {
            animation.current.play(19, 50);
          } else {
            animation.current.play(0, 19);
          }
    }, [isLiked])


    return <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        {/*Number of Likes*/}
        <Text style={styles.text}>{likeCount} Likes</Text>

        {/*Spacer*/}
        <View style={[styles.spacer, {marginRight: 0}]}/>

        {/*Like button, that triggers an Lottie heart animation*/}
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() => {
            if (!isLiked) {
                setLikeCount(likeCount + 1)
                setIsLiked(true)
            }
        }}>
            <LottieView 
                ref={animation}
                style={styles.heartLottie}
                source={require('../../assets/44921-like-animation.json')}
                autoPlay={false}
                loop={false}
            />
            <Text style={styles.text}>Like</Text>  
        </TouchableOpacity>
        
        {/*Spacer*/}
        <View style={styles.spacer} />

        {/*Edit button and icon*/}
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() => {editComment()}}>
           <Entypo name="edit" size={10} color='rgb(115, 115, 132)' style={{marginRight: 5}} />
           <Text style={styles.text}>Edit</Text> 
        </TouchableOpacity>
        
        {/*Spacer*/}
        <View style={styles.spacer}/>

        {/*Delete Button and Icon*/}
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() => {
                    deleteComment(id)
                    setLikeCount(likeCount)
                }}>
            <FontAwesome5 name="trash" size={10} color='rgb(115, 115, 132)' style={{marginRight: 5}} />
            <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
        
    </View>
};

const styles = StyleSheet.create({
    spacer: {
        height: 10,
        borderColor: 'rgb(173, 185, 201)',
        borderWidth: 0.7,
        marginRight: 5,
        marginLeft: 5
    }, 
    text: {
        fontSize: 11,
        fontWeight: 'bold',
        color: 'rgb(115, 115, 132)'
    },heartLottie: {
        width: 25,
        height: 25,
    }
});

export default CommentActions;