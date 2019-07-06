import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground
} from 'react-native';
import { Container, Title  } from 'native-base';
import { connect } from 'react-redux';
import {AddNavigation} from '../redux/actions/actions';
import Swiper from 'react-native-swiper';
import colors from '../styles/colors';
import SlideContent from '../containers/slides/slideContent';
import CustomHeader from '../components/customHeader';

class Intro extends Component {
    componentWillMount(){
        this.props.addNav(this.props.navigation);
        if(this.props.isLoggedIn){
            this.props.navigation.navigate('MainScreen');
        }
    }
    render() {
        return (
            <ImageBackground
                style={{ flex: 1 }}
                source={require("../images/back.png")}
            >
                <CustomHeader 
                    right={
                        <Text />
                    }
                    body={
                        <Title style={{ textAlign: "center", width: "100%", fontFamily: "IRANSans" }}>راهنمای کار با سامانه</Title>
                    }
                    left={
                        <Text />
                    }
                    statusBarColor={colors.midnightblue}
                    backgroundColor={"rgba(0,0,0,0.1)"}
                />
                <Swiper
                    loop={false}
                    dotStyle={
                        {   
                            backgroundColor : colors.clouds,
                            borderWidth : .5,
                            borderColor : colors.clouds
                        }
                    }
                    activeDotColor={colors.orange}
                    nextButton={
                        <Text style={{
                            color: colors.clouds , 
                            fontFamily : "IRANSans" , 
                            fontSize : 15 , 
                            padding : '2%'
                        }}>بعدی</Text>
                    }
                    prevButton={
                        <Text style={{
                            color: colors.clouds , 
                            fontFamily : "IRANSans" , 
                            fontSize : 15 , 
                            padding : '2%'
                        }}>قبلی</Text>
                    }
                    showsButtons={true}
                    buttonWrapperStyle={{
                        alignItems: "flex-end"
                    }}
                >
                    <View style={styles.slideContainer}>
                        <SlideContent
                            navigation={this.props.navigation}
                            title={"ثبت نام"}
                            text={"شما می توانید از این صفحه چه به عنوان کاربر عادی و چه به عنوان وکیل ثبت نام کنید \n از آنجا که کد ملی شما برای ثبت نام نیاز است تنها یک بار قابلیت ثبت نام دارید."}
                            imageSource={require("../images/appIntro/1.png")}
                            skip={true}
                            checked={false}
                        />
                    </View>
                    <View style={styles.slideContainer}>
                        <SlideContent
                            navigation={this.props.navigation}
                            title={"افزودن سوال"}
                            text={"شما می توانید از این طریق وارد فرم افزودن سوال بشوید و مسائل حقوقی خود را مطرح کنید \n هم وکلا و هم کابران عادی قابلیت مطرح کردن سوال را دارند."}
                            imageSource={require("../images/appIntro/2.jpg")}
                            skip={false}
                            checked={false}
                        />
                    </View>
                    <View style={styles.slideContainer}>
                        <SlideContent
                            navigation={this.props.navigation}
                            title={"افزودن توییت"}
                            text={"تنها وکلا قادر هستند تا مسائل و نکات قابل توجه حقوقی خود را به عنوان توییت بنویسند"}
                            imageSource={require("../images/appIntro/3.png")}
                            skip={false}
                            checked={false}
                        />
                    </View>
                    <View style={styles.slideContainer}>
                        <SlideContent
                            navigation={this.props.navigation}
                            title={"خروج از حساب کاربری"}
                            text={"شما می توانید از این بخش از حساب کاربری خود خارج شوید."}
                            imageSource={require("../images/appIntro/4.jpg")}
                            skip={false}
                            checked={true}
                        />
                    </View>
                </Swiper>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isLoggedIn : state.userReducer.isLoggedIn , 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNav: (property) => { dispatch(AddNavigation(property)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro)