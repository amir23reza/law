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
                    <View style={{flex : 1}} />
                    <View style={{flex : 4}}>
                        <Text style={styles.username}>{username}</Text>
                    </View>
                    <View style={{flex : 1}}>
                        <Thumbnail source={require("../images/user_logo.png")} />
                    </View>
                </CardItem>
                <CardItem>
                    <View>
                        <Title style={styles.questionTitle}>{title}</Title>
                        <Text style={{ textAlign: 'justify' }}>{description}</Text>
                    </View>
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
        borderRadius : 15 , 
        padding : '1%',
        marginTop : 10
    } , 
    questionTitle : {
        color : colors.midnightblue , 
        textAlign : "center" , 
        alignSelf : "center"
    } , 
    header : { 
        borderBottomColor: colors.concrete, 
        borderBottomWidth: 0.5 
    } , 
    username : { 
        textAlign: "center", 
        width: '100%' , 
        color : colors.midnightblue ,  
        fontFamily : "IRANSans",
    }
})

export default SimpleCard;
