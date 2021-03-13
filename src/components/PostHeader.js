import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';

const PostHeader = ({userName, date}) => {
    const currentDate = new moment()

    {/*profile image, and text of the post */}
    return <View style={{flexDirection: 'row'}} >
        {/*Profile Image*/}
        <Image 
            source={require('../../assets/ProfileImage.jpeg')}
            style={styles.image}
        />

        {/*Username, location, and elapsed time since post*/}
        <View style={{flex: 1, flexDirection: 'column', alignSelf: 'flex-start', marginTop: 10}} >
            
            <Text style={styles.userInfo} >{userName}</Text>
            
            <View style={{flexDirection: 'row', marginLeft: 8}} >
                <MaterialIcons name="location-pin" size={15} color='#44a6c6'/>
                <Text style={{color: '#44a6c6', fontWeight: 'bold'}} >OH, USA</Text>
            </View>
            
            <Text style={{marginLeft: 8, fontSize: 12, color: '#696969'}}> {date.from(currentDate)}</Text>
            
        </View>

        <SimpleLineIcons name="options" size={24} color="gray" style={{marginTop: 20, marginRight: 10}}/>
    </View>
};

const styles = StyleSheet.create({
    userInfo: {
        fontWeight: '500', 
        fontFamily: 'Helvetica',
        fontSize: 15,
        color: 'rgb(78, 78, 91)',
        marginLeft: 10,
        marginRight: 10,
        
    },
    image: {
        height: 50,
        width: 50,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 100
    },
})

export default PostHeader;