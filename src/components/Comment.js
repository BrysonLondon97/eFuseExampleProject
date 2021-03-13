import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CommentActions from '../components/CommentActions';
import moment from 'moment';

const Comment = ({commentData, deleteComment, editComment, userName, userTitle}) => {
    {/*Get the current time*/}
    const currentDate = new moment()

    return <View style={styles.container}>
        {/*Profile Image*/}
        <Image 
            source={require('../../assets/ProfileImage.jpeg')}
            style={[styles.image, {height: 35, width: 35}]}
        />

        {/*Comment Box*/}
        <View style={styles.commentBox} >
            <View style={{margin: 10, flex: 3}}>
              {/*Username*/}
              <Text style={styles.userName}>{userName}</Text> 
              {/*User Title*/}
              <Text style={styles.userTitle}>{userTitle}</Text>
              {/*Text of the comment*/}
              <Text style={[styles.text, {flex: 1}]}>{commentData.comment}</Text>
              {/*Section for edit, delete, and like buttons of a comment*/}
              <CommentActions 
                id = {commentData.id}
                deleteComment={deleteComment}
                editComment={editComment}
              />
            </View>
            <Text style={{marginTop: 10, marginRight: 10, fontSize: 11, color: 'rgb(130, 147, 169)'}}>{commentData.date.from(currentDate)}</Text>

        </View>
    </View>
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 12,
        marginBottom: 20,
        flexDirection: 'row'
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 100,
        alignSelf: 'center'
    },
    commentBox: {
        backgroundColor: 'rgb(218, 225, 234)', 
        flex: 1,
        marginLeft: 11,
        borderRadius: 5,
        justifyContent: 'center',
        flexDirection: 'row',
    }, 
    userTitle: {
        color: 'rgb(101, 150, 241)',
        fontWeight: '500',
        fontSize: 11,

    },
    userName: {
        fontWeight: '500', 
        fontFamily: 'Helvetica',
        fontSize: 13,
        color: 'rgb(78, 78, 91)',
    },
    text: {
        fontSize: 10,
        fontWeight: '500'
    }

});

export default Comment;