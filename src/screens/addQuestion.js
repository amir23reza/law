import React , {Component} from 'react';
import {
    StyleSheet ,
    View , 
    Image
} from 'react-native';
import {
    Content , 
    Container , 
    Button , 
    Text,
    Header,
    Left,
    Right , 
    Icon,
    Textarea,
    Input
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';

class AddQuestion extends Component{
    render(){
        return(
            <LinearGradient colors={[colors.asbestos,colors.clouds]} style={styles.linearWrapper}>
                <Container style={styles.wrapper}>
                    <Header transparent androidStatusBarColor="transparent">
                        <Left>
                            <Button style={{backgroundColor : colors.orange , borderRadius : 200}}>
                                <Text style={{color : colors.clouds}}>ثبت</Text>
                            </Button>
                        </Left>
                        
                        <Right>
                            <Button transparent>
                                <Icon type="FontAwesome5" name="times" style={{color : colors.orange}} />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <View style={{ flex: 1, flexDirection: "row", display: "flex", width: "90%", alignSelf: "center", marginTop: 15 }}>
                            <View style={{ flex: 5, paddingHorizontal: "1%" }}>
                                <Input
                                    placeholder="عنوان سوال" 
                                    placeholderTextColor={colors.midnightblue}
                                    style={{ textAlign: "right", color: colors.midnightblue, fontSize: 16 }}
                                />
                                <Textarea
                                    style={{ textAlign: "right", color: colors.midnightblue, fontSize: 18 }}
                                    placeholder="متن سوال ..."
                                    placeholderTextColor={colors.midnightblue}
                                    rowSpan={10}
                                />
                                <View style={{ width: "100%", aspectRatio: 1 / 1 }}>
                                    <Image source={require('../images/law.jpg')} resizeMode="contain" style={{ width: "100%", aspectRatio: 1 / 1, height: "100%" }} />
                                </View>
                            </View>
                            <View style={{ flex: 1, width: "100%", aspectRatio: 1 / 1 }}>
                                <Image source={require('../images/user_logo.png')} resizeMode="contain" style={{ width: "100%", height: "100%", borderRadius: 200, }} />
                            </View>
                        </View>
                    </Content>
                    <Button block style={styles.addPhoto}><Text>افزودن عکس</Text></Button>
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
    }, 
    addPhoto : {
        bottom : 10 , 
        width : "95%" , 
        alignSelf : "center",
        backgroundColor : colors.orange , 
        borderRadius : 200
    }
})

export default AddQuestion;