import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { Title, Button, Icon } from 'native-base';
import colors from '../../styles/colors';

class SlideContent extends Component {
  render() {
    const { title, text, imageSource, skip, checked } = this.props;
    const showBtn =
      skip || checked ? (
        skip ? (
          <Button
            style={styles.skipBtn}
            transparent
            onPress={() => {
              this.props.navigation.navigate("SignUp");
            }}
          >
            <Text
              style={{
                color: colors.clouds,
                fontFamily: "IRANSans",
                fontSize: 15,
                padding: "2%"
              }}
            >
              رد کردن
            </Text>
          </Button>
        ) : (
          <Button
            style={styles.checked}
            transparent
            onPress={() => {
              this.props.navigation.navigate("SignUp");
            }}
          >
            <Icon
              type="FontAwesome5"
              name="arrow-circle-right"
              style={{ color: colors.clouds }}
            />
          </Button>
        )
      ) : (
        <View />
      );
    return (
        <View style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={imageSource}
              resizeMode="contain"
            />
          </View>
          <View style={styles.TextWrapper}>
            <Title style={styles.title}>{title}</Title>
            <Text style={styles.text}>{text}</Text>
          </View>
          {showBtn}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center"
    },
    imageWrapper: {
        width: "80%",
        aspectRatio: 1 / 1,
        alignSelf: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 8
    },
    skipBtn: {
        position: "absolute",
        bottom: 5,
        left: 5,
    },
    checked: {
        position: "absolute",
        bottom: 5,
        right: 5 , 
    },
    title: {
        color: colors.clouds,
        fontFamily : "IRANSans"
    },
    text: {
        color: colors.clouds,
        textAlign: "center",
        paddingHorizontal: 15,
        fontFamily: "IRANSans"
    }
})

export default SlideContent;