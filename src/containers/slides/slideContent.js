import React , {Component} from 'react';
import {
    View ,
    Text , 
    Image ,
    StyleSheet , 
    StatusBar
} from 'react-native';
import { Title, Button, Icon } from 'native-base';
import colors from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

class SlideContent extends Component{

    navigate = ()=>{
        const navigate = this.props.navigation.navigate;
        // if the user was logged in navigate him to main screen
        //but now we just navigate him to signUp screen
        navigate("SignUp");
    }

    render(){
        const {title , text , imageSource , skip , checked } = this.props;
        const showBtn = (skip || checked) ? ((skip)?(
            <Button style={styles.skipBtn} transparent onPress={this.navigate}>
                <Text style={{color : colors.belizehole}}>رد کردن</Text>
            </Button>
        ):(
            <Button style={styles.checked} transparent onPress={this.navigate}>
                <Icon type="FontAwesome5" name="arrow-circle-right" style={{color : colors.belizehole}}/>
            </Button>
        )):(
            <View></View>
        ) ;
        return(
            <LinearGradient colors={[colors.belizehole,colors.clouds]} style={styles.linearWrapper}>
                <View style={styles.wrapper}>
                    <StatusBar hidden={true} />
                    <View style={styles.imageWrapper}>
                        <Image style={styles.image} source={imageSource} resizeMode="contain" />
                    </View>
                    <View style={styles.TextWrapper}>
                        <Title style={styles.title}>{title}</Title>
                        <Text style={styles.text}>{text}</Text>
                    </View>
                    {showBtn}
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearWrapper : {
        flex : 1
    } , 
    wrapper : {
        flex : 1,
        justifyContent : "center"
    } , 
    imageWrapper : {
        width : "80%" , 
        aspectRatio : 1/1 , 
        alignSelf : "center" , 
    } , 
    image : {
        width : "100%", 
        height : "100%" ,
        borderRadius : 8
    } , 
    skipBtn : {
        position : "absolute" , 
        bottom : 5 , 
        left : 5 , 
    } , 
    checked : {
        position : "absolute" , 
        bottom : 5 , 
        right : 5
    } , 
    title : {
        color : colors.midnightblue , 
    } , 
    text : {
        color : colors.wetasphalt , 
        textAlign : "center" , 
        paddingHorizontal : 15
    }
})

export default SlideContent;