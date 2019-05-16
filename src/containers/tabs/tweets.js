import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import colors from '../../styles/colors';
import TweetCard from '../../components/tweetCard';
import tweets from '../../data/tweets.json';

class Tweets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            hasScrolled: false,
            scrollDirection: "up",
        }
    }

    static navigationOptions = {
        //tabBarLabel: ({tintColor}) => (<Text style={{color : tintColor}}>توییت ها</Text>) , 
        tabBarIcon: ({ tintColor }) => (<Icon type="FontAwesome5" name="quote-right" style={{ color: tintColor }} />)
    }

    fetchMore = () => {
        if (this.state.refreshing) {
            return null;
        }
        alert('reachedEnd')
    };

    render() {
        tweets.map((item) => {
            item.key = item.id
        })
        return (
            <View style={styles.wrapper}>
                <FlatList
                    data={tweets}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { this.props.navProperty.navigate('Detail') }}>
                            <TweetCard
                                username={item.username}
                                avatar={item.avatar}
                                tweet={item.tweet}
                                hits={item.hits}
                                comments={item.comments}
                                date={item.date}
                            />
                        </TouchableOpacity>
                    )}
                    refreshing={this.state.isRefreshing}
                    onRefresh={() => {
                        this.setState({ isRefreshing: true });
                        setTimeout(() => {
                            alert("refreshed");
                            this.setState({ isRefreshing: false });
                        }, 2000)
                    }}
                    onEndReached={this.fetchMore}
                    onEndReachedThreshold={0.1}

                />
                <Button block style={{ backgroundColor: colors.emerland }} onPress={() => { this.props.navProperty.navigate('AddTweet') }}>
                    <Icon type="FontAwesome5" name="pen" style={{ color: colors.clouds }} />
                </Button>
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
        navProperty: state.navReducer.navProperty
    }
}

export default connect(mapStateToProps)(Tweets)