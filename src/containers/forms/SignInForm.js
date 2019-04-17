import React, { Component } from 'react'
import {
    Form,
    Input,
    Icon,
    Item,
    Button,
    Text
} from 'native-base';
import {
    StyleSheet,
    View,
    Image
} from 'react-native'
import colors from '../../styles/colors';

class SignInForm extends Component {

    signIn = ()=>{
        this.props.navigation.navigate("MainScreen")
    }

    render() {
        return (
            <Form style={styles.form}>
                <Item style={styles.item} rounded>
                    <Input rounded style={styles.Input} placeholder="ایمیل" />
                </Item>
                <Item style={styles.item} rounded>
                    <Input error style={styles.Input} placeholder="رمز عبور" />
                </Item>
                <Button block style={styles.signInBtn} onPress={this.signIn}>
                    <Text>ورود</Text>
                </Button>
            </Form>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 15,
        borderWidth: 0,
        paddingHorizontal: 10,
        backgroundColor: colors.clouds
    },
    Input: {
        textAlign: "right",
    },
    form: {
        marginVertical: 30
    },
    signInBtn: {
        backgroundColor: colors.orange,
        borderRadius: 500
    }
})

export default SignInForm;