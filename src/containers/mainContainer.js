import React, { Component } from 'react';
import {
    ImageBackground,
} from 'react-native';
import {
    Content
} from 'native-base'
import colors from '../styles/colors';
import CustomHeader from '../components/customHeader';

class MainContainer extends Component{
    render(){
        const {right , body , left , content , type} = this.props;
        return (
          <ImageBackground
            style={{ flex: 1}}
            source={require("../images/back.png")}
          >
            <CustomHeader
              backgroundColor={"rgba(0,0,0,0.1)"}
              statusBarColor={colors.midnightblue}
              left={
                left
              }
              body={
                body
              }
              right={
                right
              }
            />
            {
              type === "tab" ? (
                content
              ) : (
                <Content>
                  { content }
                </Content>
              )
            }
          </ImageBackground>
        );
    }
}

export default MainContainer;