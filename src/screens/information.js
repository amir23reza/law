import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import {
    Button,
    Title,
    Icon
} from 'native-base';
import MainContainer from '../containers/mainContainer';
import CollapseContainer from "../containers/collapseContainer";
import colors from '../styles/colors'

class Information extends Component {
    render() {
        return (
            <MainContainer
                right={<Text />}
                body={
                    <View style={styles.imgContainer}>
                        <Image source={require('../images/logo.png')} resizeMode="contain" style={styles.img} />
                    </View>
                }
                left={
                    <Button transparent onPress={() => { this.props.navigation.navigate('MainScreen') }}>
                        <Icon type="FontAwesome5" name="angle-left" />
                    </Button>
                }
                content={
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <CollapseContainer
                            headerTxt="درباره وکلا"
                            content={
                                <Text style={styles.txt}>
                                    وکلا اپلیکیشنی با هدف برقراری ارتباط راحت تر و سریع تر با وکلای جوان و جویای نام و همچنین افزایش اطلاع عموم جامعه درباره مسائل حقوقی کشور می باشد. شما می توانید مشکلات حقوقی خود را در برنامه مطرح کرده و منتظر جواب متخصصین و حتی دیگر افرادی که مسائل شمابهی رو تجربه کرده اند بمانید.
                                </Text>
                            }
                        />
                        <CollapseContainer
                            headerTxt="قواانین و ضوابط"
                            content={
                                <View>
                                    <Text style={styles.txt}>{"1- برای ثبت نام کد ملی شما نیاز می باشد، در نتیجه شما تنها می توانید یک بار و تنها در یک نقش کاربر عادی و یا وکیل ثبت نام کنید."}</Text>
                                    <Text style={styles.txt}>{"2- برای ایجاد توییت میبایست حتما در نقش وکیل ثبت نام کرده باشید، اما برای ایجاد سوال هر دو نقش امکان مطرح کردن سوال دارند."}</Text>
                                    <Text style={styles.txt}>{"3- ایمیل و شماره تلفن وکیل برای ادامه ارتباط با کاربر عادی در ورين های بعدی در اختیار آنها قرار خواهد گرفت."}</Text>
                                </View>
                            }
                        />
                    </View>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    imgContainer: {
        width: '30%',
        aspectRatio: 1 / 1,
        position: 'relative',
        display: 'flex',
        alignSelf: 'center'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    txt: { 
        fontFamily: 'IRANSans', 
        color: colors.midnightblue, 
        padding: '2%', 
        width: '100%', 
        textAlign: 'center' 
    }
});

export default Information;