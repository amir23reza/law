import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import colors from '../../styles/colors';
import TweetCard from '../../components/tweetCard';
import tweets from '../../data/tweets.json';
import Axios from 'axios';

class Tweets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            hasScrolled: false,
            scrollDirection: "up",
            tweets : []
        }
    }

    static navigationOptions = {
        //tabBarLabel: ({tintColor}) => (<Text style={{color : tintColor}}>توییت ها</Text>) , 
        tabBarIcon: ({ tintColor }) => (<Icon type="FontAwesome5" name="quote-right" style={{ color: tintColor }} />)
    }

    // fetchMore = () => {
    //     if (this.state.refreshing) {
    //         return null;
    //     }
    //     alert('reachedEnd')
    // };

    getTweets = () => {
        Axios.get('http://192.168.1.4:4001/tweets/fetch')
        .then(res => {
            console.log(res);
            this.setState({ tweets: res.data.data });
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentWillMount(){
        this.getTweets();
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <FlatList
                    data={this.state.tweets}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { this.props.navProperty.navigate('Detail' , {
                                id:item._id , 
                                type : 'tweet',
                                date: new Date(item.createTime)
                            }) }}>
                            <TweetCard
                                username={item.userName}
                                tweet={item.content}
                                hits={item.likes.length}
                                comments={item.comments.length}
                                date={item.createTime}
                            />
                        </TouchableOpacity>
                    )}
                    refreshing={this.state.isRefreshing}
                    onRefresh={() => {
                        this.setState({ isRefreshing: true });
                        this.getTweets();
                        setTimeout(() => {
                            this.setState({ isRefreshing: false });
                        }, 2000)
                    }}
                />
                {
                    this.props.userType != "user" ? (
                        <Button block style={{ backgroundColor: colors.emerland }} onPress={() => {
                            this.props.navProperty.navigate('AddTweet', {
                                refresh: this.getTweets
                            })
                        }}>
                            <Icon type="FontAwesome5" name="pen" style={{ color: colors.clouds }} />
                        </Button>
                    ) : (
                        <View />
                    )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    }
})

const mapStateToProps = (state) => {
    return {
        navProperty: state.navReducer.navProperty , 
        userType : state.userReducer.userType
    }
}

export default connect(mapStateToProps)(Tweets)