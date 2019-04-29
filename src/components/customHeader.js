import React, { Component } from 'react';
import {
    Header , 
    Right , 
    Body , 
    Left
} from 'native-base';
import {StatusBar } from 'react-native'

class MainPage extends Component {

    componentDidMount(){
        const {statusBarColor}= this.props; 
        StatusBar.setBackgroundColor(statusBarColor)
    }

    showLeft = () =>{
        const { left } = this.props;
        if(left){
            return(
                <Left style={{flex : 1}}>
                    {left}
                </Left>
            )
        }
    }

    showBody = () => {
        const {body} = this.props;
        if (body) {
            return (
                <Body style={{flex: 3 }}>
                    {body}
                </Body>
            )
        }
    }

    showRight = () => {
        const { right } = this.props;
        if (right) {
            return (
                <Right style={{flex: 1 }}>
                    {right}
                </Right>
            )
        }
    }

    render() {
        const { backgroundColor , statusBarColor } = this.props;
        return (
            <Header androidStatusBarColor={statusBarColor} style={{backgroundColor}}>
                <StatusBar barStyle="light-content" backgroundColor={statusBarColor} />
                {this.showLeft()}
                {this.showBody()}
                {this.showRight()}
            </Header>
        )
    }
}

export default MainPage;