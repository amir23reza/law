import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground
} from 'react-native';
import { Container, Title  } from 'native-base';
import Swiper from 'react-native-swiper';
import colors from '../styles/colors';
import SlideContent from '../containers/slides/slideContent';
import CustomHeader from '../components/customHeader';

class Intro extends Component {
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
                            title={"لورم"}
                            text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                            imageSource={require("../images/law.jpg")}
                            skip={true}
                            checked={false}
                        />
                    </View>
                    <View style={styles.slideContainer}>
                        <SlideContent
                            navigation={this.props.navigation}
                            title={"لورم"}
                            text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                            imageSource={require("../images/law.jpg")}
                            skip={false}
                            checked={false}
                        />
                    </View>
                    <View style={styles.slideContainer}>
                        <SlideContent
                            navigation={this.props.navigation}
                            title={"لورم"}
                            text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                            imageSource={require("../images/law.jpg")}
                            skip={false}
                            checked={false}
                        />
                    </View>
                    <View style={styles.slideContainer}>
                        <SlideContent
                            navigation={this.props.navigation}
                            title={"لورم"}
                            text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                            imageSource={require("../images/law.jpg")}
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

export default Intro;