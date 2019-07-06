import React, { Component } from 'react';
import {
    Form , 
    Picker , 
    Button , 
    Title
} from 'native-base';
import {
    View , 
    Text , 
    StyleSheet
} from 'react-native';
import colors from '../styles/colors';
import RegularSignUp from '../containers/forms/regularSignUp';
import LawyerSignUp from '../containers/forms/lawyerSignUp';
import MainContainer from '../containers/mainContainer';

class SignUp extends Component{

    constructor(props){
        super(props);
        this.state = {
            selected : "key1"
        }
    }

    onValueChange = (value) => {
        this.setState({
          selected: value
        });
    }

    showSignUpFrom = () => {
        if(this.state.selected === "key0"){
            return(
                <RegularSignUp navigation={this.props.navigation} />
            )
        } else {
            return(
                <LawyerSignUp navigation={this.props.navigation} />
            )
        }
    }

    render(){
        return(
            <MainContainer 
                left={<Text />}
                right={
                    <Button transparent onPress={()=>{this.props.navigation.navigate("SignIn")}}>
                        <Text style={styles.loginBtn}>ورود</Text>
                    </Button>
                }
                body={
                    <Title
                        style={{
                        textAlign: "center",
                        width: "100%",
                        fontFamily: "IRANSans"
                        }}
                    >
                        وکلا
                    </Title>
                }
                content={
                    <View>
                        <View style={styles.chooseType}>
                            <Text style={styles.welcomeText}> به وکلا خوش آمدید، نوع عضویت خود را مشخص کنید</Text>
                            <Form style={styles.pickerForm}>
                                <Picker
                                    note
                                    mode="dropdown"
                                    style={styles.Picker}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange}
                                >
                                    <Picker.Item label="کاربر عادی" value="key0" />
                                    <Picker.Item label="وکیل" value="key1" />
                                </Picker>
                            </Form>
                        </View>
                        <View style={styles.formWrapper}>
                            {this.showSignUpFrom()}
                        </View>
                    </View>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    Picker : {
        width : "90%" , 
        //backgroundColor : colors.clouds , 
        alignSelf : 'center',
        marginTop : 5,
        borderRadius : 15 , 
        color : colors.clouds
    } , 
    welcomeText : {
        width : '100%' , 
        textAlign : 'center' , 
        color : colors.midnightblue , 
        fontFamily : "IRANSans"
    } , 
    pickerForm : {
        backgroundColor : colors.midnightblue,
        borderRadius : 15 ,
        marginTop : 15,
        width : '90%',
        alignSelf : 'center'
    } , 
    loginBtn : {
        fontSize : 18 , 
        color : colors.clouds
    },
    formWrapper : {
        width : '90%' , 
        alignSelf : 'center'
    }
})

export default SignUp;