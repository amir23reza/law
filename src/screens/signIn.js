import React, { Component } from 'react';
import {
    Container,
    Content,
    Header,
    Right,
    Button
} from 'native-base';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import colors from '../styles/colors';
import SignInForm from '../containers/forms/SignInForm';
import LinearGradient from 'react-native-linear-gradient';

class SignIn extends Component {

    render() {
        return (
            <LinearGradient colors={[colors.belizehole , colors.wetasphalt]} style={{ flex: 1 }}>
                <Container style={{ backgroundColor: 'transparent' }}>
                    <Header transparent androidStatusBarColor="transparent">
                        <Right>
                            <Button transparent onPress={()=>{this.props.navigation.navigate("SignUp")}}>
                                <Text style={styles.signUpBtn}>ثبت نام</Text>
                            </Button>
                        </Right>
                    </Header>
                    <Content style={styles.wrapper}>
                        <View style={styles.formWrapper}>
                            <SignInForm navigation={this.props.navigation} />
                        </View>
                    </Content>
                </Container>
            </LinearGradient>
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
    }
})

export default SignIn;