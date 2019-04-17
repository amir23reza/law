import React , {Component} from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';
import MainHeader from '../components/MainHeader';
import AppContainer from '../navigators/tabNavigator';
import colors from '../styles/colors';

class MainScreen extends Component {
    render(){
        return(
            <View style={styles.wrapper}>
                <MainHeader />
                <AppContainer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper : {
        flex : 1 , 
        backgroundColor : colors.midnightblue
    }
})

export default MainScreen;