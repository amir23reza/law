import React , {Component} from 'react';
import { Text, View, } from 'react-native';
import { Button , Title } from 'native-base'
import AppContainer from '../navigators/tabNavigator';
import MainContainer from '../containers/mainContainer';
import colors from '../styles/colors';

class MainScreen extends Component {
    render(){
        return(
            <MainContainer 
                right={ 
                    <Button transparent onPress={()=>{this.props.navigation.navigate('Profile')}}>
                        <Text style={{fontFamily : "IRANSans" , color : 'white'}}>پروفایل</Text>
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


export default MainScreen;