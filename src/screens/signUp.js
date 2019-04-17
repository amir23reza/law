import React, { Component } from 'react';
import {
    Container ,
    Content , 
    Form , 
    Header , 
    Picker , 
    Right , 
    Button
} from 'native-base';
import {
    View , 
    Text , 
    StyleSheet
} from 'react-native';
import colors from '../styles/colors';
import RegularSignUp from '../containers/forms/regularSignUp';
import LawyerSignUp from '../containers/forms/lawyerSignUp';
import LinearGradient from 'react-native-linear-gradient';

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
                <RegularSignUp />
            )
        } else {
            return(
                <LawyerSignUp />
            )
        }
    }

    render(){
        const linearBackground = this.state.selected==="key0" ? [colors.midnightblue , colors.belizehole] : [colors.belizehole , colors.midnightblue]
        return(
            <LinearGradient colors={linearBackground} style={{flex : 1}}>
                <Container style={{backgroundColor : 'transparent'}}>
                    <Header transparent androidStatusBarColor="transparent">
                        <Right>
                            <Button transparent onPress={()=>{this.props.navigation.navigate("SignIn")}}>
                                <Text style={styles.loginBtn}>ورود</Text>
                            </Button>
                        </Right>
                    </Header>
                    <Content style={styles.wrapper}>
                        <View style={styles.chooseType}>
                            <Text style={styles.welcomeText}> به اینجا خوش آمدید، نوع عضویت خود را مشخص کنید</Text>
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
                    </Content>
                </Container>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    wrapper : {
        flex : 1,
        paddingHorizontal : "8%",
    } , 
    Picker : {
        width : "100%" , 
        //backgroundColor : colors.clouds , 
        marginTop : 5,
        borderRadius : 15 , 
        color : colors.clouds
    } , 
    welcomeText : {
        color : colors.clouds
    } , 
    pickerForm : {
        backgroundColor : colors.orange,
        borderRadius : 150 ,
        marginTop : 15
    } , 
    loginBtn : {
        fontSize : 18 , 
        color : colors.clouds
    }
})

export default SignUp;