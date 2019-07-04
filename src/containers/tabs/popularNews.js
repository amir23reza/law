import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Icon , Button} from 'native-base';
import { connect } from 'react-redux';
import colors from '../../styles/colors';
import questions from '../../data/questions.json';
import SimpleCard from '../../components/simpleCard';
import Axios from 'axios';

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

    getQuestions = () => {
        Axios.get('http://192.168.1.4:4001/questions/byLike')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        questions.map((item) => {
            item.key = item.id
        })
        this.getQuestions();
        return (
            <View style={styles.wrapper}>
                <FlatList
                    data={questions}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { this.props.navProperty.navigate('Detail') }}>
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
                <Button block style={{ backgroundColor: colors.emerland }} onPress={() => { this.props.navProperty.navigate('AddQuestion') }}>
                    <Icon type="FontAwesome5" name="plus" style={{ color: colors.clouds }} />
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

const mapStateToProps = (state) => {
    return {
        navProperty: state.navReducer.navProperty
    }
}

export default connect(mapStateToProps)(PopularNews)