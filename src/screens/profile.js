import React, { Component } from 'react'
import {
    View, StyleSheet, Text
} from 'react-native';
import {
    Content, Icon, Title, Button, List, ListItem
} from 'native-base';
import MainContainer from '../containers/mainContainer';
import CollapseContainer from '../containers/collapseContainer';
import colors from '../styles/colors';
import RegularSignUp from '../containers/forms/regularSignUp';
import LawyerSignUp from '../containers/forms/lawyerSignUp';
import users from '../data/users.json';
import lists from '../data/statusList.json';
const user = users[1];

class Profile extends Component {
    render() {
        return (
            <MainContainer
                right={
                    <Text />
                }
                body={
                    <Title
                        style={{
                            textAlign: "center",
                            width: "100%",
                            fontFamily: "IRANSans"
                        }}
                    >
                        پروفایل من
                    </Title>
                }
                left={
                    <Button transparent onPress={() => { this.props.navigation.navigate('MainScreen') }}>
                        <Icon type="FontAwesome5" name="angle-left" />
                    </Button>
                }
                content={
                    <View style={{width : '90%' , alignSelf : 'center'}}>
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
                        <View style={{marginBottom : 15}}>
                                {
                                    lists.map((list) => {
                                        return (
                                            <CollapseContainer
                                                headerTxt={
                                                    <Text style={styles.listTitle}>{list.header}</Text> 
                                                }
                                                content={
                                                    list.items.map((item) => {
                                                        return (
                                                            <View key={item.key}>
                                                                <Text  style={styles.listItem}>{item.content}</Text>
                                                            </View>
                                                        )
                                                    })
                                                }
                                            />
                                        )
                                    })
                                }
                        </View>
                    </View>
                }
            />
        )
    }
}



const styles = StyleSheet.create({
    statusList: {
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 5,
        marginBottom: 15
    },
    listTitle: {
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        color: colors.clouds,
        fontFamily : "IRANSans"
    },
    listItem: {
        width: "100%",
        textAlign: "right",
        color: colors.midnightblue,
        width : "100%",
        fontFamily : "IRANSans",
        borderBottomWidth : .5 , 
        borderBottomColor : colors.midnightblue
    }
})

export default Profile;