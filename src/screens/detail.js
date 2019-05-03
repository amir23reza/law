import React , {Component} from 'react';
import {
    StyleSheet,
    View , 
    Text , 
    Image
} from 'react-native';
import {
    Icon , 
    Button,
    Card,
    Input
} from 'native-base';
import colors from '../styles/colors';
import MainContainer from '../containers/mainContainer';
const array = [1,2,3,4,5];

class Detail extends Component{
    render(){
        return(
            <MainContainer 
                right={
                    <Button transparent>
                        <Icon type="FontAwesome5" name="share-alt" />
                    </Button>
                }
                body={
                    <View style={styles.imgContainer}>
                        <Image source={require('../images/logo.png')} resizeMode="contain" style={styles.img} />
                    </View>
                }
                left={
                    <Button transparent>
                        <Icon type="FontAwesome5" name="angle-left" />
                    </Button>
                }
                content={
                    <View>
                        <Card style={styles.card}>
                            <View style={styles.header}>
                                <View style={{ flex: 2 , justifyContent : 'center' , alignItems : 'center' }}>
                                    <Text style={{fontFamily : "IRANSans"}}>امیررضا حق وردی</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={styles.avatarWrapper}>
                                        <Image source={require('../images/user_logo.png')} style={styles.avatar} resizeMode="contain" />
                                    </View>
                                </View>
                                <View style={{ flex: 2 , justifyContent : 'center' , alignItems : 'center' }}>
                                    <Text style={{fontFamily : "IRANSans"}}>43دقیقه قبل </Text>
                                </View>
                            </View>
                            <View style={{padding : '2%'}}>
                                <Text style={styles.title}>لورم ایپسوم</Text>
                                <Text style={styles.content}>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </Text>
                            </View>
                        </Card>
                        <Card style={styles.card}>
                            <View style={styles.commentHeader}>
                                <Text style={{alignSelf : 'center' , color : colors.clouds , fontFamily : "IRANSans",fontSize : 18}}>نظرات</Text>
                            </View>
                            <View style={styles.commentBody}>
                                {
                                    array.map(() => {
                                        return (
                                            <View style={styles.commentRow}>
                                                <View style={{ flex: 1, display: 'flex', position: 'relative', aspectRatio: 1 / 1, padding: '1%', borderRadius: 500 }}>
                                                    <Image source={require('../images/user_logo.png')} resizeMode="contain" style={{ width: '100%', height: '100%', borderRadius: 500 }} />
                                                </View>
                                                <View style={{ flex: 5 }}>
                                                    <Text style={{ fontFamily: "IRANSans", fontSize: 14, color: colors.asbestos, textAlign: 'justify' }}>
                                                        <Text style={{ fontSize: 15, color: colors.midnightblue }}>امیررضا حق وردی : </Text>
                                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                                    </Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </Card>
                        <View style={styles.writeComment}>
                            <View style={{flex : 5}}>
                                <Input style={styles.input} placeholder="نظر خود را بنویسید ..." placeholderTextColor={colors.clouds}  />
                            </View>
                            <View style={{flex : 1}}>
                                <Button transparent>
                                    <Icon type="FontAwesome5" name="paper-plane" style={{color : colors.clouds}} />
                                </Button>
                            </View>
                        </View>
                    </View>
                }
            />
        )
    }
}

const styles =  StyleSheet.create({
    imgContainer:{
        width : '30%' , 
        aspectRatio : 1/1 , 
        position : 'relative',
        display : 'flex',
        alignSelf : 'center'
    } , 
    img : {
        width : '100%' , 
        height : '100%'
    },
    card : {
        marginTop : 15 , 
        width : '90%' , 
        alignSelf : 'center',
        borderRadius : 15
    },
    header : {
        display : 'flex',
        flexDirection : 'row-reverse',
        borderBottomWidth : 0.5 , 
        borderBottomColor : colors.peterriver,
        paddingBottom : 15,
        padding : '2%'
    } , 
    avatarWrapper : {
        width : '100%' , 
        aspectRatio : 1/1 ,
        display : 'flex',
        position : 'relative',
        borderRadius : 500
    } , 
    avatar : {
        width : '100%',
        height : '100%'
    },
    title:{
        fontFamily : "IRANSans",
        width : '100%',
        textAlign : 'center',
        fontSize : 18 , 
        color : colors.midnightblue
    },
    content : {
        fontFamily : "IRANSans",
        fontSize : 15 , 
        color : colors.asbestos ,
        textAlign : 'justify'
    },
    commentHeader : {
        borderTopLeftRadius : 15 , 
        borderTopRightRadius : 15 ,
        backgroundColor : colors.midnightblue,
        padding : '3%'
    },
    commentRow : {
        display : 'flex',
        flexDirection : 'row-reverse',
        padding : '2%',
        borderBottomWidth : .6 , 
        borderBottomColor : colors.peterriver
    }, 
    writeComment : {
        display : 'flex',
        flexDirection : 'row-reverse',
        borderTopWidth : .6 , 
        borderTopColor : colors.clouds,
        padding : '2%'
    },
    input : {
        borderRadius : 500,
        borderWidth : 0.6 , 
        borderColor : colors.clouds,
        textAlign : 'center',
        color : colors.clouds
    }
})

export default Detail;