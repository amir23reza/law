import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Icon, Card, Title, Thumbnail, CardItem, Body, Left, Right } from 'native-base';
import colors from '../styles/colors';

class SimpleCard extends Component {
    render() {
        const {username , avatar , title , description , hits , comments , dateTime} = this.props;
        return (
            <Card style={styles.simpleCard}>
                <CardItem header style={styles.header}>
                    <Body style={{ justifyContent: "center" , flex : 4 }}>
                        <Text style={styles.username}>{username}</Text>
                    </Body>
                    <Right style={{flex : 1}}>
                        <Thumbnail source={require("../images/user_logo.png")} />
                    </Right>
                </CardItem>
                <CardItem>
                    <Body>
                        <Title style={styles.questionTitle}>{title}</Title>
                        <Text style={{ textAlign: 'right' }}>{description}</Text>
                    </Body>
                </CardItem>
                
                    {
                        hits != null ? (
                            <CardItem footer>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity>
                                        <Text>
                                            <Icon type="FontAwesome5" name="heart" solid={1 === 2 ? false : true} style={{ color: 1 === 2 ? colors.midnightblue : colors.alizarin }} />
                                            {hits}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity>
                                        <Text>
                                            <Icon type="FontAwesome5" name="comment" />
                                            {comments}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 3 }}></View>
                            </CardItem>
                        ) : (
                            <CardItem footer>
                                <View style={{flex : 2}}>
                                    <Text style={{color : colors.midnightblue}}>
                                        <Icon type="FontAwesome5" name="clock" style={{color : colors.midnightblue}}/>
                                        {dateTime}
                                    </Text>
                                </View>
                                <View style={{flex : 3}}></View>
                            </CardItem>
                        )
                    }
                
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    simpleCard : {
        width : '90%' , 
        alignSelf : 'center', 
        borderRadius : 10 , 
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
        fontSize : 18 , 
    }
})

export default SimpleCard;
