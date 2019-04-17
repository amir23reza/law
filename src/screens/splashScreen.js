import React, { Component } from 'react';
import {
    Animated , 
    Easing , 
    View , 
    Image , 
    StyleSheet , 
    StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';

class Splash extends Component {

    constructor(props){
        super(props);
        this.state = {
            scaleValue: new Animated.Value(0),
        }
    }

    scaleLogo(value) {
        Animated.timing(
            this.state.scaleValue,
            {
                toValue: value,
                duration: 1000,
                easing: Easing.easeOutBack,
            },
        ).start();
    }

    render(){
        const newScale = this.state.scaleValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.2],
        });
        this.scaleLogo(1);
        return(
            <LinearGradient colors={[colors.sunflower,colors.belizehole]} style={styles.linearWrapper}>
                <View style={styles.wrapper}>
                    <StatusBar hidden={true} />
                    <Animated.View style={[{transform : [{scale : newScale}]},styles.logoWrapper]}>
                        <Image resizeMode="contain" source={require("../images/logo.png")} style={styles.logo}/>
                    </Animated.View>
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
        flex : 1 ,
        backgroundColor : "transparent" , 
        justifyContent : "center"
    } , 
    logoWrapper : {
        width : "60%" , 
        aspectRatio : 1/1 , 
        alignSelf : "center" , 
    } , logo : {
        width : "100%", 
        height : "100%" ,
    }
})

export default Splash;
