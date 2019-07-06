import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Button,
  Text,
  Icon,
  Textarea,
} from "native-base";
import colors from "../styles/colors";
import {connect} from 'react-redux';
import MainContainer from "../containers/mainContainer";
import CustomInput from '../components/customInput';
import Axios from "axios";

class AddQuestion extends Component {

  constructor(props){
    super(props);
    this.state = {
      title : null , 
      content : null 
    }
  }

  addQuestion = () => {
    if(this.state.title == null || this.state.title == ""){
      alert("عنوان سوال نباید خالی باشد.")
    } else if (this.state.content == null || this.state.content == ""){
      alert("متن سوال نباید خالی باشد.")
    } else {
      Axios.post('http://192.168.1.4:4001/questions/add', {
        "userId": this.props.userId,
        "title": this.state.title,
        "content": this.state.content,
        "userName": this.props.userName
      }).then(res => {
        console.log(res);
        if (res.status == 200) {
          alert('سوال شما با موفقیت ثبت شد');
          // update the question list and get back to main screen
          var refresh = this.props.navigation.getParam('refresh' , ()=>{});
          refresh();
          this.props.navigation.navigate('MainScreen');
        }
      }).catch(err => {
        alert(err)
      })
    }
  }

  render() {
    return (
      <MainContainer
        right={
          <Button transparent onPress={() => { this.props.navigation.navigate('MainScreen') }}>
            <Icon
              type="FontAwesome5"
              name="times"
              style={{ color: colors.midnightblue }}
            />
          </Button>
        }
        body={<Text />}
        left={
          <Button style={{ backgroundColor: colors.midnightblue, borderRadius: 15 }} onPress={this.addQuestion}>
            <Text style={{ color: colors.clouds }}>ثبت</Text>
          </Button>
        }
        content={
          <View style={{ paddingBottom: 15 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                display: "flex",
                width: "90%",
                alignSelf: "center",
                marginTop: 15
              }}
            >
              <View style={{ flex: 5, paddingHorizontal: "1%" }}>
                <CustomInput
                    type="text"
                    placeholder="عنوان سوال"
                    placeholderTextColor={colors.midnightblue}
                    onTextChange={(title) => { this.setState({title}) }}
                />
                <Textarea
                  style={{
                    textAlign: "center",
                    color: colors.midnightblue,
                    fontSize: 18,
                    backgroundColor : 'rgba(255,255,255,.6)',
                    borderRadius : 15,
                    marginTop : 15
                  }}
                  placeholder="متن سوال"
                  placeholderTextColor={colors.midnightblue}
                  onChangeText={(content) => { this.setState({ content })}}
                  value={this.state.content}
                  rowSpan={10}
                />
                {/* <View style={{ width: "100%", aspectRatio: 1 / 1 }}>
                  <Image
                    source={require("../images/law.jpg")}
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      aspectRatio: 1 / 1,
                      height: "100%",
                    }}
                  />
                </View> */}
              </View>
              <View style={{ flex: 1, width: "100%", aspectRatio: 1 / 1 }}>
                <Image
                  source={require("../images/user_logo.png")}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%", borderRadius: 200  , marginTop : 15 }}
                />
              </View>
            </View>
            {/* <Button style={styles.addPhoto} >
                <Text style={{width : '100%', fontFamily : "IRANSans" , textAlign : 'center'}}>افزودن عکس</Text>
            </Button> */}
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  linearWrapper: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    backgroundColor: "transparent"
  },
  addPhoto: {
    bottom: 10,
    width: "95%",
    alignSelf: "center",
    backgroundColor: colors.orange,
    borderRadius: 200
  },
  addPhoto : {
    width : "90%" , 
    alignSelf : "center",
    backgroundColor : colors.midnightblue , 
    borderRadius : 15
}
});

const mapStateToProps = (state) => {
  console.log(state)
  return {
    userId: state.userReducer.userId,
    userName : state.userReducer.userName
  }
}

export default connect(mapStateToProps)(AddQuestion)
