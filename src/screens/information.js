import React , {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import {
    Button , 
    Title , 
    Icon
} from 'native-base';
import MainContainer from '../containers/mainContainer';
import CollapseContainer from "../containers/collapseContainer";

class Information extends Component {
    render(){
        return(
            <MainContainer 
                right={<Text />}
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
                    <View style={{width : '90%' , alignSelf : 'center'}}>
                        <CollapseContainer 
                            headerTxt="درباره وکلا"
                            content={
                                <Text>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </Text>
                            }
                        />
                        <CollapseContainer
                            headerTxt="قواانین و ضوابط"
                            content={
                                <Text>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </Text>
                            }
                        />
                    </View>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    imgContainer: {
        width: '30%',
        aspectRatio: 1 / 1,
        position: 'relative',
        display: 'flex',
        alignSelf: 'center'
    },
    img: {
        width: '100%',
        height: '100%'
    },
});

export default Information;