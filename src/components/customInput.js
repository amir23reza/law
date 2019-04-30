import React, { Component } from 'react'
import {
    Item , 
    Input , 
    Icon
} from 'native-base';
import {
    Animated , 
    Easing , 
    TouchableOpacity , 
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import colors from '../styles/colors';

class CustomInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            secureInput : !(props.type === "text" || props.type === "email" || props.type === "phone" ) ,
            scaleCheckmarkValue: new Animated.Value(0),
            value : this.props.value != "" ? this.props.value : ""
        }
    }

    scaleCheckmark(value) {
        Animated.timing(
            this.state.scaleCheckmarkValue,
            {
                toValue: value,
                duration: 400,
                easing: Easing.easeOutBack,
            },
        ).start();
    }

    toggleShowPass = () => {
        this.setState({secureInput : !this.state.secureInput});
    }

    onChangeText = (value) => {
        this.setState({value})
    }

    render(){
        const {type , showCheckMark , placeholder , placeholderTextColor , selectionColor} = this.props;
        const { scaleCheckmarkValue } = this.state;
        const iconScale = scaleCheckmarkValue.interpolate({ // ? interpolate ?
            inputRange: [0, 0.5, 1],
            outputRange: [0.01, 1.6, 1],
        });
        const scaleValue = showCheckMark? 1 : 0;
        this.scaleCheckmark(scaleValue);
        return(
            <View style={styles.formItem}>
                {
                    type === "password" ? (
                        <TouchableOpacity
                            style={styles.showButton}
                            onPress={this.toggleShowPass}
                        >
                            {this.state.secureInput ? (<Icon type="FontAwesome5" name="eye" size={25} style={styles.showButtonText} />) :
                                (<Icon type="FontAwesome5" name="eye-slash" size={25} style={styles.showButtonText} />)}
                        </TouchableOpacity>
                    ) : (
                        null
                    )
                }
                <Animated.View style={[{ transform: [{ scale: iconScale }] }, styles.checkmarkWrapper]}>
                    <Icon
                        type="FontAwesome5"
                        name="check"
                        size={20}
                        style={{ color: colors.greensea }}
                    />
                </Animated.View>
                <TextInput
                    style={styles.formInput}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={this.state.secureInput}
                    selectionColor={selectionColor}
                    keyboardType={type === "email" ? "email-address" : type === "phone" ? "number-pad" : "default"}
                    onChangeText={this.onChangeText}
                    value={this.state.value}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formItem : {
        marginTop : 15,
        width : '100%'
    } , 
    formInput : {
        color : colors.midnightblue , 
        textAlign : 'center',
        backgroundColor : 'rgba(255,255,255,0.65)' , 
        borderRadius : 15,
        fontFamily : "IRANSans",
        fontSize : 15,
        paddingVertical : 15,
    } , 
    showButton : {
        alignSelf : "flex-start" ,
        position : "absolute" , 
        zIndex : 99,
        left : 10 , 
        top : 10
    } ,
    showButtonText : {
        color: colors.midnightblue,
        fontWeight: '200',
    } , 
    checkmarkWrapper : {
        alignSelf : "flex-start" ,
        position : "absolute" , 
        bottom : 6
    }
})

export default CustomInput;