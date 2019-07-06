import React, { Component } from 'react'
import {
    Form,
    Input,
    Icon,
    Item,
    Button,
    Text,
    Textarea
} from 'native-base';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {PersistUser} from '../../redux/actions/actions';
import colors from '../../styles/colors';
import CustomInput from '../../components/customInput';
import Axios from 'axios';

const options = {
    title: 'عکس پروفایل خودتان را انتخاب کنید',
    takePhotoButtonTitle: 'عکس آنی',
    chooseFromLibraryButtonTitle: 'انتخاب از گالری',
    quality: 1
}

class LawyerSignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // imageSource : null , 
            // data : null ,
            fullName : null , 
            email : null ,
            nationalCode : null , 
            phoneNumber : null , 
            password : null , 
            aboutMe : null , 
            type : 'lawyer'
        }
    } 

    uploadForm = () => {
        Axios.post('http://192.168.1.4:4001/users/signUp', {
            fullName: this.state.fullName,
            email: this.state.email,
            nationalCode: this.state.nationalCode,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
            aboutMe : this.state.aboutMe ,
            type: this.state.type
        }).then(res => {
            console.log(res);
            // persist the user data here
            // navigate the user to the main page if ok
            this.props.register_persist(res.data.newUser._id, res.data.newUser.fullName, res.data.newUser.type);
            this.props.navigation.navigate('MainScreen')
        }).catch(err => {
            alert("این ایمیل یا کد ملی قبلا ثبت شده است.")
        })
    }

    

    // createFormData = (photo, body) => {
    //     const data = new FormData();

    //     data.append("photo", {
    //         name: photo.fileName,
    //         type: photo.type,
    //         uri:
    //             Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    //     });

    //     Object.keys(body).forEach(key => {
    //         data.append(key, body[key]);
    //     });

    //     return data;
    // };

    // pickImage = () => {
    //     ImagePicker.showImagePicker(options, (response) => {
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             alert('ImagePicker Error: ', response.error);
    //         } else {
    //             let source = { uri: response.uri };
    //             this.setState({
    //                 imageSource: source,
    //                 data: response.data // new
    //             });
    //         }
    //     });
    // }

    handleTextChange = (text, type) => {
        switch (type) {
            case 'fullName':
                this.setState({ fullName: text });
                break;
            case 'email':
                const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const { validEmail } = this.props;
                this.setState({ email: text });
                if (!validEmail) {
                    if (emailCheckRegex.test(text)) {
                        this.setState({ validEmail: true });
                    }
                } else if (!emailCheckRegex.test(text)) {
                    this.setState({ validEmail: false });
                }
                break;
            case 'nationalCode':
                this.setState({ nationalCode: text })
                break;
            case 'phoneNumber':
                this.setState({ phoneNumber: text })
                break;
            case 'password':
                const { validPassword } = this.state;
                this.setState({ password: text });
                if (!validPassword) {
                    if (text.length > 4) {
                        // Password has to be at least 5 characters long - you can do extra validation if you want to.
                        this.setState({ validPassword: true });
                    }
                } else if (text.length <= 4) {
                    this.setState({ validPassword: false });
                }
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <Form style={styles.form}>
                {/* <TouchableOpacity style={styles.imagePickerContainer} onPress={this.pickImage}>
                    <Image source={this.state.imageSource ? this.state.imageSource : require('../../images/user_logo.png')} resizeMode="cover" style={styles.profileImage} />
                    <View style={styles.plusIconWrapper}>
                        <Icon type="FontAwesome5" name="plus" style={styles.plusIcon} />
                    </View>
                </TouchableOpacity> */}
                <CustomInput
                    value={this.state.name}
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    placeholderTextColor={colors.midnightblue}
                    onTextChange={(text) => { this.handleTextChange(text, 'fullName') }}
                />
                <CustomInput
                    type="email"
                    placeholder="ایمیل"
                    placeholderTextColor={colors.midnightblue}
                    onTextChange={(text) => { this.handleTextChange(text, 'email') }}
                    showCheckMark={this.state.validEmail}
                />
                <CustomInput
                    type="phone"
                    placeholder="کد ملی"
                    placeholderTextColor={colors.midnightblue}
                    onTextChange={(text) => { this.handleTextChange(text, 'nationalCode') }}
                />
                <CustomInput
                    type="phone"
                    placeholder="شماره تماس"
                    placeholderTextColor={colors.midnightblue}
                    onTextChange={(text) => { this.handleTextChange(text, 'phoneNumber') }}
                />
                {
                    this.state.type === "edit" ? (
                        <View>
                            <CustomInput
                                type="password"
                                placeholder="رمز عبور فعلی"
                                placeholderTextColor={colors.midnightblue}
                            />
                            <CustomInput
                                type="password"
                                placeholder="رمز عبور جدید"
                                placeholderTextColor={colors.midnightblue}
                            />
                        </View>
                    ) : (
                            <CustomInput
                                type="password"
                                placeholder="رمز عبور"
                                placeholderTextColor={colors.midnightblue}
                                onTextChange={(text) => { this.handleTextChange(text, 'password') }}
                            />
                        )
                }
                <Item style={styles.item} rounded>
                    <Textarea rowSpan={5} style={[{ width: "100%" }, styles.Input]} placeholder="درباره من" value={this.state.aboutMe} onChangeText={(aboutMe) => { this.setState({ aboutMe }) }} placeholderTextColor={colors.midnightblue} />
                </Item>
                <Button block style={styles.btn} onPress={this.uploadForm}>
                    {this.state.type === "edit" ? (<Text style={styles.btnTxt}>ویرایش</Text>) : (<Text style={styles.btnTxt}>عضویت</Text>)}
                </Button>
            </Form>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        color: colors.midnightblue,
        backgroundColor: 'rgba(255,255,255,0.65)',
        borderRadius: 15,
        paddingVertical: 15,
        marginTop: 15
    },
    Input: {
        textAlign: "center",
        fontFamily: "IRANSans",
        fontSize: 15,
        color: colors.midnightblue
    },
    form: {
        marginVertical: 30
    },
    signUpBtn: {
        backgroundColor: colors.orange,
        borderRadius: 500
    },
    imagePickerContainer: {
        width: "30%",
        aspectRatio: 1 / 1,
        alignSelf: "center",
        borderRadius: 100,
        marginVertical: 10,
        justifyContent: 'center',

    },
    profileImage: {
        width: "100%",
        borderRadius: 150,
        aspectRatio: 1 / 1,
        height: "100%"
    },
    plusIconWrapper: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: colors.midnightblue,
        borderRadius: 150,
        width: "30%",
        aspectRatio: 1 / 1,
        justifyContent: "center",
        alignItems: "center"
    },
    plusIcon: {
        color: colors.clouds,
        fontSize: 20,
    },
    btn: {
        borderRadius: 15,
        backgroundColor: colors.midnightblue,
        width: '100%',
        marginTop: 15,
        alignSelf: 'center'
    },
    btnTxt: {
        fontFamily: "IRANSans",
        color: colors.clouds
    },
})

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        register_persist: (userId, userName, type) => { dispatch(PersistUser(userId, userName, type)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LawyerSignUp)