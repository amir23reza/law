import React , {Component} from 'react';
import {
    StyleSheet,
    View , 
    Text , 
    Image,
    TouchableOpacity
} from 'react-native';
import {
    Icon , 
    Button,
    Card,
    Input
} from 'native-base';
import colors from '../styles/colors';
import MainContainer from '../containers/mainContainer';
import Axios from 'axios';
import {connect} from 'react-redux';
import JDATE from 'jalali-date';

class Detail extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLiked : false , 
            like_id : null , 
            for_id : null ,
            type : 'question' , 
            commentBody : null , 
            comments : [] , 
            Detail : {}
        }
    }
    componentWillMount(){
        // ---------------- GET THE QUESTION OR TWEET -------------------
        var for_id = this.props.navigation.getParam('id' , null);
        this.setState({for_id});
        var type = this.props.navigation.getParam('type' , 'question');
        this.setState({type});
        if(type == "question"){
            Axios.get('http://192.168.1.4:4001/questions/getSingle/'+for_id)
            .then(res=>{
                this.setState({Detail : res.data.data})
            })
            .catch(err=>{
                console.log(err);
            })
        }else if(type == "tweet"){
            Axios.get('http://192.168.1.4:4001/tweets/getSingle/' + for_id)
                .then(res => {
                    this.setState({ Detail: res.data.data })
                })
                .catch(err => {
                    console.log(err);
                })
        }
        // ---------------- GET THE QUESTION OR TWEET -------------------

        // ---------------- CHECK WHETHER IT IS LIKED OR NOT ------------
        Axios.get('http://192.168.1.4:4001/likes/isLiked/' + for_id + '/' +this.props.userId) // for id / user id
        .then(res=>{
            if (res.data.data !== null) {
                this.setState({ isLiked: true, like_id: res.data.data._id });
            }
        })
        .catch(err => {
            alert(err)
        })
        // ---------------- CHECK WHETHER IT IS LIKED OR NOT ------------
    }

    componentDidMount(){
        this.getComments(this.state.for_id);
    }

    toggleLike = () => {
        if(this.state.isLiked){
            Axios.delete('http://192.168.1.4:4001/likes/unlike/'+this.state.like_id)
            .then(res => {
                if(res.data.data.deletedCount == 1){
                    this.setState({isLiked : false , like_id : null})
                }
            })
            .catch(err => {
                alert(err)
            })
        } else {
            Axios.post('http://192.168.1.4:4001/likes/hit', {
                "userId": this.props.userId,
                "type": this.state.type,
                "forId": this.state.for_id
            }).then(res=>{
                if (res.data.newLike._id){
                    this.setState({ isLiked: true, like_id: res.data.newLike._id})
                }
            }).catch(err=>{
                alert(err)
            })
        }
    }

    addComment = () => {
        Axios.post('http://192.168.1.4:4001/comments/add', {
            "userId": this.props.userId,
            "comment": this.state.commentBody,
            "type": this.state.type,
            "forId": this.state.for_id , 
            "userName": this.props.userName , 
            "userType" : this.props.userType
        }).then(res => {
            if(res.data.newComment){
                alert('نظر شما با موفقیت ثبت شد');
                this.getComments(this.state.for_id);
            }
        }).catch(err => {
            alert(err)
        })
    }

    getComments = (for_id) => {
        Axios.get('http://192.168.1.4:4001/comments/getComments/' + for_id)
            .then(resp => {
                this.setState({ comments: resp.data.data });
            })
            .catch(err => {
                alert(err)
            })
    }

    showComments = () => {
        if (this.state.comments.length == 0) {
            return(
                <View style={{padding : '2%'}}>
                    <Text style={{fontFamily : 'IRANSans' , color : colors.midnightblue , width : '100%' , textAlign : 'center'}}>
                        تا کنون هیچ نظری ثبت نشده است
                    </Text>
                </View>
            )
        } else {
            console.log(this.state.comments)
            return(
                this.state.comments.map((comment) => {
                    return(
                        <View style={styles.commentRow}>
                            <View style={{ flex: 1, display: 'flex', position: 'relative', aspectRatio: 1 / 1, padding: '1%', borderRadius: 500 }}>
                                <Image source={comment.userType == "user" ? require('../images/user_logo.png') : require("../images/lawyer_logo.png")} resizeMode="contain" style={{ width: '100%', height: '100%', borderRadius: 500 }} />
                            </View>
                            <View style={{ flex: 5 }}>
                                <Text style={{ fontFamily: "IRANSans", fontSize: 14, color: colors.asbestos, textAlign: 'justify' }}>
                                    <Text style={{ fontSize: 15, color: colors.midnightblue }}>{comment.userName} : </Text>
                                    {comment.comment}
                                </Text>
                            </View>
                        </View>
                    )
                })
            )
        }
    }

    render(){
        var d = new Date(this.props.navigation.getParam('date', new Date()));
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var jDate = new JDATE(new Date(year, month, day));
        return(
            <MainContainer 
                right={
                    <Text></Text>
                }
                body={
                    <View style={styles.imgContainer}>
                        <Image source={require('../images/logo.png')} resizeMode="contain" style={styles.img} />
                    </View>
                }
                left={
                    <Button transparent onPress={() => { this.props.navigation.navigate('MainScreen') }}>
                        <Icon type="FontAwesome5" name="angle-left" />
                    </Button>
                }
                content={
                    <View>
                        <Card style={styles.card}>
                            <View style={styles.header}>
                                <View style={{ flex: 2 , justifyContent : 'center' , alignItems : 'center' }}>
                                    <Text style={{fontFamily : "IRANSans"}}>{this.state.Detail.userName}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity style={styles.avatarWrapper} onPress={() => { /*this.props.navigation.navigate('UserProfile')*/ }}>
                                        <Image source={this.state.type == "question" ? require('../images/user_logo.png') : require('../images/lawyer_logo.png')} style={styles.avatar} resizeMode="contain" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 2 , justifyContent : 'center' , alignItems : 'center' }}>
                                    <Text style={{ fontFamily: "IRANSans" }}>{jDate.format('dddd DD MMMM YYYY')}</Text>
                                    <Text style={{ fontFamily: "IRANSans" }}>{hour + " : " + minute}</Text>
                                </View>
                            </View>
                            <View style={{padding : '2%'}}>
                                {
                                    this.state.type == "question" ? 
                                        (<Text style={styles.title}>{this.state.Detail.title}</Text>) : 
                                        (<Text />)
                                }
                                {/* <View style={styles.mainImgContainer}>
                                    <Image style={styles.mainImg} source={require('../images/law.jpg')} />
                                </View> */}
                                <Text style={styles.content}>{this.state.Detail.content}</Text>
                                <TouchableOpacity style={{alignItems : 'center'}} onPress={this.toggleLike}>
                                    <Icon type="FontAwesome5" name="heart" solid={this.state.isLiked} style={{color : colors.alizarin}} />
                                </TouchableOpacity>
                            </View>
                        </Card>
                        <View style={styles.writeComment}>
                            <View style={{ flex: 5 }}>
                                <Input
                                    style={styles.input}
                                    placeholder="نظر خود را بنویسید ..."
                                    placeholderTextColor={colors.clouds}
                                    onChangeText={commentBody => { this.setState({ commentBody }) }}
                                    value={this.state.commentBody}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button transparent disabled={this.state.comments === null ? true : false} onPress={this.addComment}>
                                    <Icon type="FontAwesome5" name="paper-plane" style={{ color: colors.clouds }} />
                                </Button>
                            </View>
                        </View>
                        <Card style={styles.card}>
                            <View style={styles.commentHeader}>
                                <Text style={{alignSelf : 'center' , color : colors.clouds , fontFamily : "IRANSans",fontSize : 18}}>نظرات</Text>
                            </View>
                            <View style={styles.commentBody}>
                                {this.showComments()}
                            </View>
                        </Card>
                        
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
        padding : '2%' , 
    },
    input : {
        borderRadius : 500,
        borderWidth : 0.6 , 
        borderColor : colors.clouds,
        textAlign : 'center',
        color : colors.clouds
    },
    mainImgContainer : {
        width : '65%' , 
        alignSelf : 'center',
        aspectRatio : 1/1 , 
        display : 'flex',
        position : 'relative',
        marginVertical : 15
    } , 
    mainImg : {
        width : '100%',
        height : '100%',
        borderRadius : 15
    }
})

const mapStateToProps = (state) => {
    console.log(state)
    return {
        userId: state.userReducer.userId,
        userName: state.userReducer.userName , 
        userType : state.userReducer.userType
    }
}

export default connect(mapStateToProps)(Detail)