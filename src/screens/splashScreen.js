import React, { Component } from 'react';
import {
    Animated , 
    Easing , 
    View ,  
    Image , 
    StyleSheet , 
    StatusBar,
    ActivityIndicator
} from 'react-native';
import MainContainer from '../containers/mainContainer';
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
            <MainContainer
                content={
                    <View style={styles.wrapper}>
                        <Animated.View style={[{ transform: [{ scale: newScale }] }, styles.logoWrapper]}>
                            <Image resizeMode="contain" source={require("../images/logo.png")} style={styles.logo} />
                        </Animated.View>
                        <ActivityIndicator size="large" color={colors.midnightblue} />
                    </View>
                }  
             />
        )
    }
}

const styles = StyleSheet.create({
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
