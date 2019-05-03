import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Icon, Card, Title, Thumbnail, CardItem, Body, Left, Right } from 'native-base';
import colors from '../styles/colors';

class TweetCard extends Component {
    render() {
        const {username , avatar  , tweet , hits , comments , date} = this.props;
        return (
            <Card style={styles.tweetCard}>
                <CardItem header style={styles.header}>
                    <Body style={{ justifyContent: "center" , flex : 4}}>
                        <Text style={styles.username}>{username}</Text>
                        <Text style={styles.date}>6 ساعت پیش</Text>
                    </Body>
                    <Right style={{flex : 1}}>
                        <Thumbnail source={require("../images/user_logo.png")} />
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
                        <Text>
                            <Icon type="FontAwesome5" name="share-alt" />
                        </Text>
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