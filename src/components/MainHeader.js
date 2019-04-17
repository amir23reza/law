import React , {Component} from 'react';
import colors from '../styles/colors';
import {
    StyleSheet , 
    TouchableOpacity 
} from 'react-native';
import { Header, Title, Body, Icon, Right } from 'native-base';

class MainHeader extends Component{
    render(){
        return(
            <Header transparent noLeft androidStatusBarColor="transparent">
                <Body>
                    <Title>Brand</Title>
                </Body>
                <Right>
                    <TouchableOpacity style={styles.buttonWrapper}>
                        <Icon type="Ionicons" name="contact" style={styles.button} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon type="Ionicons" name="information-circle" style={styles.button} />
                    </TouchableOpacity>
                </Right>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    buttonWrapper : {
        marginHorizontal: "8%" 
    } , 
    button: {
        fontSize: 33,
        color: colors.clouds
    }
})

export default MainHeader;