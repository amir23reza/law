import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import { Icon } from 'native-base';
import colors from '../styles/colors';

class CollapseContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const { headerTxt, content } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.header, this.state.isOpen ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}]} onPress={this.toggle}>
                    <Text style={styles.headerTxt}>{headerTxt}</Text>
                    <Icon type="FontAwesome5" name={this.state.isOpen ? "angle-up" : "angle-down"} style={styles.arrowIcon} />
                </TouchableOpacity>
                <View style={[styles.content, this.state.isOpen ? {} : { display: 'none' }]}>
                    {content}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 15
    },
    header: {
        borderRadius: 15,
        backgroundColor: colors.midnightblue,
        width: '100%',
        padding: '4%',
        alignItems: 'center'
    },
    content: {
        backgroundColor: colors.clouds,
        padding: '6%',
        paddingBottom: '1%',
        width: '100%'
    },
    headerTxt: {
        fontSize: 18,
        color: colors.clouds,
        textAlign: 'center',
    },
    arrowIcon: {
        position: "absolute",
        color: colors.clouds,
        left: "3%",
        fontSize: 16
    }
})

export default CollapseContainer