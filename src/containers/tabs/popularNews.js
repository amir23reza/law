import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Icon , Button} from 'native-base';
import colors from '../../styles/colors';
import questions from '../../data/questions.json';
import SimpleCard from '../../components/simpleCard';

class PopularNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            hasScrolled: false,
            scrollDirection: "up",
        }
    }

    static navigationOptions = {
        //tabBarLabel: ({ tintColor }) => (<Text style={{ color: tintColor }}>محبوب ترین سوالات</Text>) , 
        tabBarIcon: ({ tintColor }) => (<Icon type="FontAwesome5" name="gratipay" style={{ color: tintColor }} />)
    }

    fetchMore = () => {
        if (this.state.refreshing) {
            return null;
        }
        alert('reachedEnd')
    };

    render() {
        questions.map((item) => {
            item.key = item.id
        })
        return (
            <View style={styles.wrapper}>
                <FlatList
                    data={questions}
                    renderItem={({ item }) => (
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
                <Button block style={{ backgroundColor: colors.emerland }}>
                    <Icon type="FontAwesome5" name="plus" />
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
    },
})
export default PopularNews