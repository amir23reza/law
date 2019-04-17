import React, { Component } from 'react'
import {View , Image , Text , StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../styles/colors';
import {
    Button , 
    Icon
} from 'native-base';
import SlideContent from '../containers/slides/slideContent';


class AppIntro extends Component{
    render(){
        return(
            <Swiper
                loop={false}
                nextButton={
                    <Icon type="FontAwesome5" name="angle-right"/>
                }
                prevButton={
                    <Icon type="FontAwesome5" name="angle-left"/>
                }
                showsButtons={true}
                buttonWrapperStyle = {{
                    alignItems : "flex-end"
                }}
            >
                <View style={styles.slideContainer}>
                    <SlideContent
                        title={"لورم"}
                        text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                        imageSource={require("../images/law.jpg")}
                        skip={true}
                        checked={false}
                        navigation={this.props.navigation}
                    />
                </View>
                <View style={styles.slideContainer}>
                    <SlideContent
                        title={"لورم"}
                        text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                        imageSource={require("../images/law.jpg")}
                        skip={false}
                        checked={false}
                        navigation={this.props.navigation}
                    />
                </View>
                <View style={styles.slideContainer}>
                    <SlideContent
                        title={"لورم"}
                        text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."}
                        imageSource={require("../images/law.jpg")}
                        skip={false}
                        checked={true}
                        navigation={this.props.navigation}
                    />
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    slideContainer: {
      flex: 1,
      alignItems : "center" , 
      justifyContent : "center"
    }
})

export default AppIntro;