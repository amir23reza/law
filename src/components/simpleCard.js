import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Icon, Card, Title, Thumbnail, CardItem, Body, Left, Right } from 'native-base';
import colors from '../styles/colors';
import JDATE from 'jalali-date';

class SimpleCard extends Component {
    render() {
        const {username , title , description , hits , comments , date} = this.props;
        var d = new Date(date);
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var jDate = new JDATE(new Date(year, month, day));
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
                    <View style={{padding : '2%' , borderBottomWidth : 0.2 , borderBottomColor : colors.concrete}}>
                        <Title style={styles.questionTitle}>{title}</Title>
                        <Text style={{ textAlign: 'justify' , fontFamily : "IRANSans" }}>{description}</Text>
                    </View>
                
                    {
                        hits != null ? (
                            <CardItem footer>
                                <View style={{flex : 1}} />
                                <View style={{ flex: 2.5 , flexDirection : 'row-reverse'  }}>
                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                        <TouchableOpacity>
                                            <Text>
                                                <Icon type="FontAwesome5" name="heart" solid={1 === 2 ? false : true} style={{ color: 1 === 2 ? colors.midnightblue : colors.alizarin }} />
                                                {hits}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 1 , alignItems : 'center' }}>
                                        <TouchableOpacity>
                                            <Text>
                                                <Icon type="FontAwesome5" name="comment" />
                                                {comments}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flex: 1 }} />
                            </CardItem>
                        ) : (
                            <CardItem footer style={{backgroundColor : colors.clouds}}>
                                <Text style={styles.date}>{jDate.format('dddd DD MMMM YYYY') + "\n" + hour + " : " + minute}</Text>
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
    } , 
    date : {
        width : '100%' , 
        fontFamily : 'IRANSans' , 
        color : colors.midnightblue , 
        textAlign : 'center'
    }
})

export default SimpleCard;
