import React, { Component } from 'react'
import {
    View , Image , StyleSheet , Text
} from 'react-native';
import {
    Container , Content, Header, Left, Body , Icon , Title, Button , Right, List, ListItem
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';
import RegularSignUp from '../containers/forms/regularSignUp';
import LawyerSignUp from '../containers/forms/lawyerSignUp';
import Lists from '../containers/lists/lists';
import users from '../data/users.json';
import lists from '../data/statusList.json';
const user = users[1];

class Profile extends Component{
    render(){
        return(
            <LinearGradient colors={[colors.midnightblue,colors.belizehole]} style={styles.linearWrapper}>
                <Container style={styles.wrapper}>
                    <Header transparent androidStatusBarColor="transparent">
                        <Left>
                            <Button transparent>
                                <Icon type="FontAwesome5" name="angle-left" />
                            </Button>
                        </Left>
                        <Body />
                        <Right>
                            <Title>
                                پروفایل من
                            </Title>
                        </Right>
                    </Header>
                    <Content style={styles.content}>
                        <View>
                            {
                                user.type === "lawyer" ? (
                                    <LawyerSignUp
                                        name={user.name}
                                        email={user.email}
                                        national_code={user.national_code}
                                        password={user.password}
                                        avatar={user.avatar}
                                        aboutme={user.aboutme}
                                    />
                                ) : (
                                        <RegularSignUp
                                            name={user.name}
                                            email={user.email}
                                            national_code={user.national_code}
                                            password={user.password}
                                            avatar={user.avatar}
                                        />
                                    )
                            }
                        </View>
                        <Content>
                            <List>
                                {
                                    lists.map((list) => {
                                        return(
                                            <View key={list.id}>
                                                <ListItem itemHeader>
                                                    <Text style={styles.listTitle}>{list.header}</Text> 
                                                </ListItem>
                                                <View style={styles.statusList}>
                                                {list.items.map((item) => {
                                                    return(
                                                        <ListItem key={item.id}><Text style={styles.listItem}>{item.content}</Text></ListItem>
                                                    )
                                                } )}  
                                                </View>  
                                            </View>
                                        )
                                    })
                                }
                            </List>
                        </Content>
                    </Content>
                </Container>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearWrapper : {
        flex : 1
    },  
    wrapper : {
        flex : 1 , 
        backgroundColor : "transparent"
    } , 
    content : {
        paddingHorizontal : "8%"
    } , 
    statusList:{
        backgroundColor : "rgba(0,0,0,0.5)" , 
        borderRadius : 5 , 
        marginBottom : 15
    } , 
    listTitle : {
        width : "100%" , 
        textAlign : "right",  
        fontSize : 19 , 
        color : colors.orange
    } , 
    listItem : {
        width : "100%" , 
        textAlign : "right" , 
        color : colors.clouds
    }
})

export default Profile;