import React , {Component} from 'react';
import {
    Button , 
    Icon , 
} from 'native-base';
import {
    StyleSheet , 
} from 'react-native';
import colors from '../styles/colors';

class FAB extends Component{

    
    render(){ 
        const {iconName , backgroundColor} = this.props;
            return(
                    <Button style={[{ backgroundColor : backgroundColor ? backgroundColor : colors.emerland }, styles.fabBtn]}>
                        <Icon type="FontAwesome5" name={iconName ? iconName : "plus"} style={{color : colors.clouds}} />
                    </Button>
            )
        }
}

const styles = StyleSheet.create({
    fabBtn : {
        width: 70,
        aspectRatio: 1 / 1,
        height: 70,
        borderRadius: 100,
        position: 'absolute',
        right: 20,
        bottom : 20 ,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default FAB