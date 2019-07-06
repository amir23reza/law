import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Share
} from 'react-native';
import { Icon, Card, Title, Thumbnail, CardItem, Body, Left, Right } from 'native-base';
import colors from '../styles/colors';
import JDATE from 'jalali-date';

class TweetCard extends Component {
    render() {
        const {username  , tweet , hits , comments , date} = this.props;
        var d = new Date(date);
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var jDate = new JDATE(new Date(year , month , day));
        return (
            <Card style={styles.tweetCard}>
                <CardItem header style={styles.header}>
                    <Body style={{ justifyContent: "center" , flex : 4}}>
                        <Text style={styles.username}>{username}</Text>
                        <Text style={styles.date}>{jDate.format('dddd DD MMMM YYYY')}</Text>
                        <Text style={styles.date}>{hour + " : " + minute}</Text>
                    </Body>
                    <Right style={{flex : 1}}>
                        <Thumbnail source={require("../images/lawyer_logo.png")} />
                    </Right>
                </CardItem>
                <View style={{display : 'flex' , position : 'relative' , margin : 15}}>
                    <Text style={{ textAlign: 'justify' , fontFamily : "IRANSans"}}>{tweet}</Text>
                </View>
                <View style={{flexDirection : 'row-reverse'}}>
                    <View style={{ flex: 1 , alignContent : 'center' , alignItems : 'center' }}>
                        <TouchableOpacity>
                            <Text>
                                <Icon type="FontAwesome5" name="heart" solid={1 === 2 ? false : true} style={{ color: 1 === 2 ? colors.midnightblue : colors.alizarin }} />
                                {hits}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 , alignContent : 'center' , alignItems : 'center' }}>
                        <Text>
                            <Icon type="FontAwesome5" name="comment" />
                            {comments}
                        </Text>
                    </View>
                    <View style={{ flex: 1 , alignContent : 'center' , alignItems : 'center' }}>
                        <TouchableOpacity onPress={()=>{Share.share({
                                title : "توییت وکلا", 
                                message : "وکیل " + username + " : \n" + tweet
                            })}}>
                            <Icon type="FontAwesome5" name="share-alt" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    tweetCard : {
        width : '100%' , 
        alignSelf : 'center', 
        padding : 10
    } , 
    questionTitle : {
        color : colors.midnightblue , 
        textAlign : "center" , 
        alignSelf : "center"
    } , 
    header : { 
        alignItems: "flex-end", 
        alignContent: "flex-end", 
        borderBottomColor: colors.concrete, 
        borderBottomWidth: 0.5 
    } , 
    username : { 
        textAlign: "right", 
        width: '100%' , 
        color : colors.midnightblue , 
        fontSize : 18
    } , 
    date : {
        color : colors.concrete , 
    }
})

export default TweetCard;