import React, {useCallback, useState, useEffect, useRef} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, TextInput, FlatList} from 'react-native';
import PostHeader from '../components/PostHeader';
import Comment from '../components/Comment';
import { SimpleLineIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import TimeAgo from 'timeago-react'
import moment from 'moment';
const {width, height} = Dimensions.get('screen')

const Post = ({PostData, Liked, SubmitComment, }) => {
    const [isLiked, setIsLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const [showCommentBox, setShowCommentBox] = useState(false)
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([])
    {/*Only made this state value to re-render the comment box in case of a deletion of a comment */}
    const [commentCount, setCommentCount] = useState(comments.length)
    const animation = useRef(null)
    const isFirstRun = useRef(null)

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
    

    return <View style={[styles.container]} >
        {/*PostHeader component*/} 
        <PostHeader userName={PostData.userName} date={PostData.date} /> 
         
        {/*Text of the Post and the number of likes and comments*/}
        <Text style={{marginTop: 15, marginLeft: 11, marginRight: 10, marginBottom: 5}}>{PostData.content}</Text>
        <Text style={{marginTop: 10, marginLeft: 8, color: '#696969', marginBottom: 4}} > {likeCount} Likes • {commentCount} Comments </Text>

        {/*Like and comment section*/}
        <View style={{flexDirection: 'column', justifyContent: 'center', backgroundColor: 'rgb(247, 247, 247)', borderBottomLeftRadius: 8, borderBottomRightRadius: 8, flex: 1, borderTopWidth: 1, borderColor: 'gray'}} >
                <View style={{flexDirection:'row'}} >

                    {/*Like button*/}
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => {
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
                        <Text style={{color: '#696969', color: 'gray', fontWeight: 'bold', transform: [{translateX: -8}], marginRight: 5}}>Like</Text>
                    </TouchableOpacity>
                    {/*Like button*/}

                    {/*Comment Button*/}
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => {setShowCommentBox(true)}}>
                        <FontAwesome name="commenting" size={18} color='#696969' />
                        <Text style={{color: '#696969', color: 'gray', fontWeight: 'bold', marginLeft: 5}}>Comment</Text>
                    </TouchableOpacity>
                    {/*Comment Button*/}

                </View>

                {/*Show the comment section only if user hits the comment button */}
                {showCommentBox == true 
                    ? <View style={{flexDirection: 'row', alignItems: 'center', flex: 1, paddingBottom: 10, paddingLeft: 3, borderBottomLeftRadius: 8, borderBottomRightRadius: 8}} >
                        <Image 
                            source={require('../../assets/ProfileImage.jpeg')}
                            style={[styles.image, {height: 35, width: 35}]}
                        />
                        <TextInput
                            placeholder='Add Comment'
                            autoCorrect = {false}
                            style={styles.input}
                            value = {commentText}
                            onChangeText = {newValue => setCommentText(newValue)}
                            maxLength = {150}
                            returnKeyType='done'
                            onSubmitEditing={(event) => {commentText == '' 
                                ? null 
                                : 
                                    comments.push({comment: commentText, id: comments.length + 1, date: new moment()})
                                    setCommentCount(comments.length)
                                    setCommentText('')
                            }}
                                
                                    
                        />
                        
                    </View>
                      
                    : null
                }

                {/*Render out the comments, only if there are some*/}
                {comments.length > 0 
                ? 
                <FlatList 
                    data={comments}
                    showsHorizontalScrollIndicator={false}
                    inverted={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem = {({item}) => {
                        return <Comment 
                                    commentData={item}
                                    deleteComment={(id) => {
                                        console.log(id - 1)
                                        comments.splice(id - 1, 1)
                                        setCommentCount(comments.length)

                                    }}
                                    editComment={() => {
                                        console.log('edit')
                                    }}
                                    userName={PostData.userName}
                                    userTitle={PostData.title}

                            />
                    }}

                /> 
                : null
                }       
        </View> 
    </View>

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: width - 20,
        marginHorizontal: 10,
        marginVertical: 7,
        borderRadius: 8,
        flex: 1,
        shadowRadius: 1,
        shadowColor: 'gray',
        shadowOffset: {height: 0},
        shadowOpacity: 1,
    },
    image: {
        height: 50,
        width: 50,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 100
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginTop: 25,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'red'
    },
    spacer: {
        borderWidth: 5,
        borderColor: 'gray',
        width: width - 20
    },
    userInfo: {
        fontWeight: 'bold', 
        fontFamily: 'Helvetica',
        fontSize: 15,
        color: '#696969',
        marginLeft: 10,
        marginRight: 10
    },
    heartLottie: {
        width: 50,
        height: 50,
        paddingRight: 15
    },
    input: {
        flex: 1,
        alignSelf: 'flex-start',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 12,
        borderColor: 'black',
        borderWidth: 1,
        height: 40,
        textAlignVertical: 'auto',
        borderRadius: 100,
        padding: 10
    }
});

export default Post;