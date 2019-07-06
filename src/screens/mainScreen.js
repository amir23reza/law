import React , {Component} from 'react';
import { Text, View, } from 'react-native';
import { Button , Title, Icon } from 'native-base'
import AppContainer from '../navigators/tabNavigator';
import MainContainer from '../containers/mainContainer';
import {connect} from 'react-redux';
import {
    logoutUser
} from '../redux/actions/actions';
import colors from '../styles/colors';

class MainScreen extends Component {
    render(){
        return(
            <MainContainer 
                right={ 
                    <Button transparent onPress={()=>{this.props.logout();this.props.navigation.navigate('AppIntro')}}>
                        <Icon type="FontAwesome5" name="sign-out-alt" solid />
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
                    <Button transparent onPress={() => { this.props.navigation.navigate('Information') }}>
                        <Text style={{ fontFamily: "IRANSans", color: 'white' }}>درباره ما</Text>
                    </Button>
                }
                type="tab"
                content={
                    <AppContainer />
                }
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { dispatch(logoutUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)