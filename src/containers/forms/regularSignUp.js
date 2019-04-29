import React, { Component } from 'react'
import {
    Form ,
    Input , 
    Icon , 
    Item , 
    Button , 
    Text
} from 'native-base';
import {
    StyleSheet , 
    View , 
    Image
} from 'react-native'
import colors from '../../styles/colors';
import CustomInput from "../../components/customInput";

class RegularSignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : this.props.name ? this.props.name : "" , 
            email : this.props.email ? this.props.email : "" , 
            password : this.props.password ? this.props.password : "" , 
            national_code : this.props.national_code ? this.props.national_code : "" , 
            type : this.props.name ? "edit" : "signup"
        }
    }

    render(){
        return(
            <Form style={styles.form}>
                <View style={styles.imagePickerContainer}>
                    <Image source={require('../../images/user_logo.png')} resizeMode="contain" style={styles.profileImage}  />
                    <View style={styles.plusIconWrapper}>
                        <Icon type="FontAwesome5" name="plus" style={styles.plusIcon}/>
                    </View>
                </View>
                <CustomInput 
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    placeholderTextColor={colors.midnightblue}
                />
                <CustomInput 
                    type="email"
                    placeholder="ایمیل"
                    placeholderTextColor={colors.midnightblue}
                />
                <CustomInput 
                    type="phone"
                    placeholder="کد ملی"
                    placeholderTextColor={colors.midnightblue}
                />
                {
                    this.state.type === "edit" ? (
                        <View>
                            <CustomInput 
                                type="password"
                                placeholder="رمز عبور فعلی"
                                placeholderTextColor={colors.midnightblue}
                            />
                            <CustomInput 
                                type="password"
                                placeholder="رمز عبور جدید"
                                placeholderTextColor={colors.midnightblue}
                            />
                        </View>
                    ) : (
                        <CustomInput 
                            type="password"
                            placeholder="رمز عبور"
                            placeholderTextColor={colors.midnightblue}
                        />
                    )
                }
                <Button block  style={styles.btn}>
                    {this.state.type === "edit" ? (<Text style={styles.btnTxt}>ویرایش</Text>) : (<Text style={styles.btnTxt}>عضویت</Text>)}
                </Button>
            </Form>
        )
    }
}

const styles = StyleSheet.create({
    item : {
        marginBottom : 15 , 
        borderWidth : 0 , 
        paddingHorizontal : 10 , 
        backgroundColor : colors.clouds
    } ,  
    Input : {
        textAlign : "right" , 
    } , 
    form : {
        marginVertical : 30
    } , 
    signUpBtn : {
        backgroundColor : colors.orange , 
        borderRadius : 500
    } , 
    imagePickerContainer : {
        width : "30%" , 
        aspectRatio : 1/1 ,  
        alignSelf : "center" , 
        borderRadius : 100 , 
        marginVertical : 10 , 
        justifyContent : 'center', 

    } , 
    profileImage : {
        width : "100%" , 
        borderRadius : 150 ,
        aspectRatio : 1/1 ,
        height : "100%"
    } , 
    plusIconWrapper : {
        position : "absolute" , 
        bottom : 0 , 
        right : 0 , 
        backgroundColor : colors.midnightblue , 
        borderRadius : 150 , 
        width : "30%" , 
        aspectRatio : 1/1 , 
        justifyContent : "center" , 
        alignItems : "center"
    } ,
    plusIcon : {
        color : colors.clouds , 
        fontSize : 20 ,    
    }, 
    btn : {
        borderRadius : 15 , 
        backgroundColor : colors.midnightblue,
        width : '100%',
        marginTop : 15,
        alignSelf : 'center'
    },
    btnTxt : {
        fontFamily : "IRANSans" , 
        color : colors.clouds
    } , 
})

export default RegularSignUp;