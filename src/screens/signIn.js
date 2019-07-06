import React, { Component } from 'react';
import {
    Title,
    Button
} from 'native-base';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import {
    PersistUser
} from '../redux/actions/actions';
import colors from '../styles/colors';
import MainContainer from '../containers/mainContainer';
import CustomInput from '../components/customInput';

class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : null , 
            password : null,
            validEmail : false , 
            validPassword : false , 
            isLoading : false
        }
    }

    onEmailChange = (email) => {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validEmail } = this.state;
        this.setState({ email });

        if (!validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({ validEmail: true });
            }
        } else if (!emailCheckRegex.test(email)) {
            this.setState({ validEmail: false });
        }
    }

    onPasswordChange = (password) => {
        const { validPassword } = this.state;

        this.setState({ password });

        if (!validPassword) {
            if (password.length > 4) {
                // Password has to be at least 5 characters long - you can do extra validation if you want to.
                this.setState({ validPassword: true });
            }
        } else if (password.length <= 4) {
            this.setState({ validPassword: false });
        }
    }

    login = ()=>{
        const {email , password} = this.state;
        axios.post('http://192.168.1.4:4001/users/signIn' , {email , password}).then(({data})=>{
            if (data) {
                // this.props.navigation.navigate('MainScreen')
                this.props.login_persist(data._id , data.fullName , data.type);
                this.props.navigation.navigate('MainScreen')
            } else {
                alert('ایمیل یا رمز عبور وارد شده صحیح نمی باشد.')
            }
        })
    }

    render() {
        return (
            <MainContainer 
                right={
                    <Button transparent onPress={()=>{this.props.navigation.navigate("SignUp")}}>
                        <Text style={styles.signUpBtn}>ثبت نام</Text>
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
                left={
                    <Text />
                }
                content={
                    <View>
                        <View style={{ width: "90%", alignSelf: "center" }}>
                        <CustomInput
                            type="email"
                            placeholder="ایمیل"
                            placeholderTextColor={colors.midnightblue}
                            onTextChange={this.onEmailChange}
                            showCheckMark={this.state.validEmail}
                        />
                        <CustomInput
                            type="password"
                            placeholder="رمزعبور"
                            placeholderTextColor={colors.midnightblue}
                            onTextChange={this.onPasswordChange}
                            showCheckMark={this.state.validPassword}
                        />
                        </View>
                        <Button block style={styles.btn} onPress={this.login} disabled={this.state.validEmail && this.state.validPassword ? false : true}>
                            <Text style={styles.btnTxt}>ورود</Text>
                        </Button>
                    </View>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: "8%",
    },
    signUpBtn: {
        fontSize: 18,
        color: colors.clouds
    } , 
    btn : {
        borderRadius : 15 , 
        backgroundColor : colors.midnightblue,
        width : '90%',
        marginTop : 15,
        alignSelf : 'center'
    },
    btnTxt : {
        fontFamily : "IRANSans" , 
        color : colors.clouds
    } , 
})

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        login_persist: (userId , userName , type) => { dispatch(PersistUser(userId , userName , type)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)