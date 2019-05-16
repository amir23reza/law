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
import colors from '../styles/colors';
import MainContainer from '../containers/mainContainer';
import CustomInput from '../components/customInput';

class SignIn extends Component {

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
                            type="phone"
                            placeholder="تلفن همراه"
                            placeholderTextColor={colors.midnightblue}
                        />
                        <CustomInput
                            type="password"
                            placeholder="رمزعبور"
                            placeholderTextColor={colors.midnightblue}
                        />
                        </View>
                        <Button block style={styles.btn} onPress={()=>{this.props.navigation.navigate("MainScreen")}}>
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

export default SignIn;