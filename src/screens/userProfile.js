import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Linking } from "react-native";
import {
  Button,
  Icon,
  Title,
} from "native-base";
import MainContainer from '../containers/mainContainer'
import Accordion from "../components/Accordion";
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
          <Button transparent>
            <Icon type="FontAwesome5" name="angle-left" />
          </Button>
        }
        content={
          <View>
            <UserCard />
            <Accordion title="توییت ها" />
            <Accordion title="سوال ها" />
            <Accordion title="نظرات" />
          </View>
        }
      />
    );
  }
}
export default UserProfile;
