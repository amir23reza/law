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
            questions: []
        }
    }

    static navigationOptions = {
        //tabBarLabel: ({ tintColor }) => (<Text style={{ color: tintColor }}>محبوب ترین سوالات</Text>) , 
        tabBarIcon: ({ tintColor }) => (<Icon type="FontAwesome5" name="gratipay" style={{ color: tintColor }} />)
    }

    getQuestions = () => {
        Axios.get('http://192.168.1.4:4001/questions/byLike')
            .then(res => {
                var tmp = res.data.data;
                tmp = tmp.sort((a, b) => {
                    return b.likes.length - a.likes.length
                })
                this.setState({ questions: tmp });
            })
            .catch(err => {
                console.log(err)
            })
    }


    componentWillMount() {
        this.getQuestions();
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <FlatList
                    data={this.state.questions}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            this.props.navProperty.navigate('Detail', {
                                id: item._id,
                                type: 'question',
                                date: new Date(item.createTime)
                            })
                        }}>
                            <SimpleCard
                                username={item.userName}
                                title={item.title}
                                description={item.content}
                                hits={item.likes.length}
                                comments={item.comments.length}
                                //date={item.createTime}
                            />
                        </TouchableOpacity>
                    )}
                    refreshing={this.state.isRefreshing}
                    onRefresh={() => {
                        this.setState({ isRefreshing: true });
                        this.getQuestions();
                        setTimeout(() => {
                            this.setState({ isRefreshing: false });
                        }, 2000)
                    }}
                />
                <Button block style={{ backgroundColor: colors.emerland }} onPress={() => {
                    this.props.navProperty.navigate('AddQuestion', {
                        refresh: this.getQuestions
                    })
                }}>
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