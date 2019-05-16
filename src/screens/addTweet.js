import React , {Component} from 'react';
import {
    StyleSheet ,
    View , 
    Image
} from 'react-native';
import {
    Content , 
    Container , 
    Button , 
    Text,
    Header,
    Left,
    Right , 
    Icon,
    Textarea
} from 'native-base';
import MainContainer from '../containers/mainContainer';
import colors from '../styles/colors';

class AddTweet extends Component { // later on implement image picker
    render(){
        return(
            <MainContainer
                right={
                    <Button transparent onPress={()=>{this.props.navigation.navigate('MainScreen')}}>
                        <Icon type="FontAwesome5" name="times" style={{color : colors.midnightblue}} />
                    </Button>
                }   
                body={
                    <Text />
                }    
                left={
                    <Button style={{backgroundColor : colors.midnightblue , borderRadius : 15}}>
                        <Text style={{color : colors.clouds}}>ثبت</Text>
                    </Button>
                }   
                content={
                    <View style={{paddingBottom : 15}}>
                        <View style={{flex : 1 , flexDirection : "row" , display : "flex" , width : "90%" , alignSelf : "center" , marginTop : 15}}>
                            <View style={{flex : 5 , paddingHorizontal : "1%"}}>
                                <Textarea
                                    style={{textAlign : "center" , color : colors.midnightblue , fontSize : 18 }}
                                    placeholder = "توییت جدید ..."
                                    placeholderTextColor={colors.midnightblue}
                                    rowSpan={10}
                                />
                                <View style={{width : "100%" , aspectRatio : 1/1 , borderRadius : 15}}>
                                    <Image source={require('../images/law.jpg')} resizeMode="contain" style={{width : "100%" , aspectRatio : 1/1 , height : "100%" , borderRadius : 15}}/>
                                </View>
                            </View>
                            <View style={{flex : 1 , width : "100%" , aspectRatio : 1/1}}>
                                <Image source={require('../images/user_logo.png')} resizeMode="contain" style={{width : "100%" , height : "100%" , borderRadius : 200 }}/>
                            </View>
                        </View>
                        <Button style={styles.addPhoto} >
                            <Text style={{width : '100%', fontFamily : "IRANSans" , textAlign : 'center'}}>افزودن عکس</Text>
                        </Button>
                    </View>
                }   
            />
        )
    }
}




const styles = StyleSheet.create({
    addPhoto : {
        width : "90%" , 
        alignSelf : "center",
        backgroundColor : colors.midnightblue , 
        borderRadius : 15
    }
})

export default AddTweet