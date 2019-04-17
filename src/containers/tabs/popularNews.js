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
import questions from '../../data/questions.json';
import SimpleCard from '../../components/simpleCard';
let initPosition = 0;

class PopularNews extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isRefreshing : false , 
            hasScrolled : false , 
            scrollDirection : "up" , 
        }
    }

    static navigationOptions = {
        //tabBarLabel: ({ tintColor }) => (<Text style={{ color: tintColor }}>محبوب ترین سوالات</Text>) , 
        tabBarIcon: ({ tintColor }) => (<Icon type="MaterialIcons" name="loyalty" style={{color : tintColor}} /> )
    }

    fetchMore = () => {
        if (this.state.refreshing) {
            return null;
        }
        alert('reachedEnd')
    };

    render(){
        questions.map((item)=>{
            item.key = item.id
        })
        return(
            <View style={styles.wrapper}>
                <FlatList
                    data={questions}
                    renderItem = {({item}) => (
                        <TouchableOpacity>
                            <SimpleCard
                                username={item.username}
                                avatar={item.avatar}
                                title={item.title}
                                description={item.description}
                                hits={item.hits}
                                comments={item.commentsNo}
                                //dateTime={item.dateTime}
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
                <FAB backgroundColor={colors.sunflower} scrollDirection={this.state.scrollDirection} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper : {
        flex : 1 , 
        alignContent : "center" , 
        justifyContent : "center" , 
        backgroundColor : colors.clouds , 
    } , 
})
export default PopularNews