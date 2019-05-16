import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  Button,
  Icon,
  Title,
} from "native-base";
import MainContainer from '../containers/mainContainer'
import CollapseContainer from '../containers/collapseContainer';
import UserCard from "../components/userCard";

class UserProfile extends Component {
  render() {
    return (
      <MainContainer
        right={<Text />}
        body={
            <Title
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontFamily: "IRANSans"
                }}
              >
                امیررضا حق وردی
              </Title>
        }
        left={
          <Button transparent onPress={() => { this.props.navigation.navigate('MainScreen') }}>
            <Icon type="FontAwesome5" name="angle-left" />
          </Button>
        }
        content={
          <View>
            <UserCard />
            <View style={{width : '95%' , alignSelf : 'center' , marginBottom : 15}}>
              <CollapseContainer
                headerTxt="توییت ها"
                content={
                  <View>
                    <TouchableOpacity>
                      <Text>لورم ایپسوم ...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>لورم ایپسوم ...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>لورم ایپسوم ...</Text>
                    </TouchableOpacity>
                  </View>
                }
              />
              <CollapseContainer
                headerTxt="سوال ها"
                content={
                  <View>
                    <TouchableOpacity>
                      <Text>لورم ایپسوم ...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>لورم ایپسوم ...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>لورم ایپسوم ...</Text>
                    </TouchableOpacity>
                  </View>
                }
              />
              <CollapseContainer
                headerTxt="نظرات"
                content={
                  <View>
                    <TouchableOpacity>
                      <Text>لورم ایپسوم ...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>لورم ایپسوم ...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>لورم ایپسوم ...</Text>
                    </TouchableOpacity>
                  </View>
                }
              />
            </View>
          </View>
        }
      />
    );
  }
}
export default UserProfile;
