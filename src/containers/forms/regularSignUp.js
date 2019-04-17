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
                <Item style={styles.item} rounded>
                    <Input bordered style={styles.Input} placeholder="نام" value={this.state.name} onChangeText={(name) => {this.setState({name})}} />
                </Item>
                <Item style={styles.item} rounded>
                    <Input rounded style={styles.Input} placeholder="ایمیل" value={this.state.email} onChangeText={(email) => {this.setState({email})}} />
                </Item>
                <Item style={styles.item} rounded>
                    <Input success style={styles.Input} placeholder="کد ملی" value={this.state.national_code} onChangeText={(national_code) => {this.setState({national_code})}} />
                </Item>
                {
                    this.state.type === "edit" ? (
                        <View>
                            <Item style={styles.item} rounded>
                                <Input error style={styles.Input} placeholder="رمز عبور فعلی" secureTextEntry={true} />
                            </Item>
                            <Item style={styles.item} rounded>
                                <Input error style={styles.Input} placeholder="رمز عبور جدید" secureTextEntry={true}/>
                            </Item>
                        </View>
                    ) : (
                            <Item style={styles.item} rounded>
                                <Input error style={styles.Input} placeholder="رمز عبور" />
                            </Item>
                    )
                }
                <Button block style={styles.signUpBtn}>
                    {this.state.type === "edit" ? (<Text>ویرایش</Text>) : (<Text>عضویت</Text>)}
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
        backgroundColor : colors.orange , 
        borderRadius : 150 , 
        width : "30%" , 
        aspectRatio : 1/1 , 
        justifyContent : "center" , 
        alignItems : "center"
    } ,
    plusIcon : {
        color : colors.clouds , 
        fontSize : 20 ,    
    }
})

export default RegularSignUp;