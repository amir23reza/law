import React, { Component } from 'react'
import {
    StyleSheet , 
    View , 
    Image , 
    Text , 
    Linking
} from 'react-native';
import {
    Container , 
    Card , 
    CardItem , 
    Button , 
    Left , 
    Body , 
    Right , 
    Icon , 
    Title , 
    Header , 
    Content,
} from 'native-base';
import colors from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import Accordion from '../components/Accordion';
import call from 'react-native-phone-call';

class UserProfile extends Component{
    render(){
        return(
            <LinearGradient colors={[colors.pumpkin,colors.sunflower]} style={styles.linearWrapper}>
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
                                امیررضا حق وردی
                            </Title>
                        </Right>
                    </Header>
                    <Content>
                        <Card style={{width : "95%" , alignSelf : "center" , borderRadius : 15 , padding : "2%"}}>
                            <CardItem>
                                    <View style={{ flex: 3 , flexDirection : "column" }}>
                                        <View style={{flex : 1}}>
                                            <Text style={{width : "100%" , textAlign : "center" , color : colors.midnightblue , fontSize : 18}}>امیررضا حق وردی</Text>
                                        </View>
                                        <View style={{ flex: 1 , display : "flex" , flexDirection : "row" }}>
                                            <View style={{ flex: 1 , alignItems : "center" }}>
                                                <Text>
                                                    <Icon type="FontAwesome5" name="heart" />
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 , alignItems : "center" }}>
                                                <Text>
                                                    <Icon type="FontAwesome5" name="share-alt" />
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <View style={styles.imageContainer}>
                                            <Image source={require('../images/user_logo.png')} resizeMode="contain" style={styles.profileImage}  />
                                        </View>
                                    </View>
                            </CardItem>
                            <CardItem>
                                <Title style={{color : colors.midnightblue , width : "100%" }}>
                                    درباره من
                                </Title>
                            </CardItem>
                            <CardItem>
                                <Text style={{textAlign : "center" , paddingHorizontal : "1%"}}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </Text>
                            </CardItem>
                            <CardItem>
                                <View style={{flex : 1}}>
                                <Button onPress={()=>{Linking.openURL('mailto:amir.reza.haghverdi.khu@gmail.com')}} style={{width : "98%" , alignSelf : "center" , backgroundColor: colors.belizehole , borderRadius : 200}}>
                                    <Text style={{color : colors.clouds , textAlign : 'center' , width : '100%' , fontSize : 17}}>
                                        <Icon type="FontAwesome5" name="envelope" />
                                        ارسال ایمیل
                                    </Text>
                                </Button>
                                </View>
                                <View style={{flex : 1}}>
                                <Button onPress={() => {call({number : '989102118482' , propmt : false}).catch(console.error)}} style={{width : "98%" , alignSelf : "center" , backgroundColor: colors.emerland , borderRadius : 200}}>
                                    <Text style={{color : colors.clouds , textAlign : 'center' , width : '100%' , fontSize : 17}}>
                                        <Icon type="FontAwesome5" name="phone" />
                                        تماس
                                    </Text>
                                    
                                </Button>
                                </View>
                            </CardItem>
                        </Card>
                        <Accordion
                            title="توییت ها"
                        />
                        <Accordion
                            title="سوال ها"
                        />
                        <Accordion
                            title="نظرات"
                        />
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
    }, 
    imageContainer : {
        width : "100%" , 
        aspectRatio : 1/1 ,  
        alignSelf : "center" , 
        borderRadius : 150 , 
        justifyContent : 'center', 

    } , 
    profileImage : {
        width : "100%" , 
        borderRadius : 150 ,
        aspectRatio : 1/1 ,
        height : "100%"
    } 
})

export default UserProfile;