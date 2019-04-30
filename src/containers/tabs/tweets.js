import React, { Component } from 'react';
import {
    View , 
    StyleSheet , 
    FlatList ,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';
import colors from '../../styles/colors';
import FAB from '../../components/FAB';
import TweetCard from '../../components/tweetCard';
import tweets from '../../data/tweets.json';
let initPosition = 0;
 
class Tweets extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isRefreshing : false , 
            hasScrolled : false , 
            scrollDirection : "up" , 
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

    render(){
        tweets.map((item)=>{
            item.key = item.id
        })
        return(
            <View style={styles.wrapper}>
                <FlatList
                    data={tweets}
                    renderItem = {({item}) => (
                        <TouchableOpacity>
                            <TweetCard 
                                username = {item.username}
                                avatar = {item.avatar}
                                tweet = {item.tweet}
                                hits = {item.hits}
                                comments = {item.comments}
                                date = {item.date}
                            />
                        </TouchableOpacity>
                    )}
                    refreshing = {this.state.isRefreshing}
                    onRefresh = {() => {
                        this.setState({isRefreshing : true});
                        setTimeout(()=>{
                            alert("refreshed");
                            this.setState({isRefreshing : false});
                        } , 2000)
                    }}
                    onEndReached={this.fetchMore}
                    onEndReachedThreshold={0.1}
                    onScroll = {(data) => {
                        const position = data.nativeEvent.contentOffset.y;
                        if(position > initPosition){
                            console.log("down");
                            this.setState({
                                scrollDirection : "down"
                            })
                        } else {
                            this.setState({
                                scrollDirection : "up"
                            })
                        }
                        initPosition = position;
                    }}
                />
                <FAB iconName="pen" backgroundColor={colors.sunflower} scrollDirection={this.state.scrollDirection} />
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
export default Tweets