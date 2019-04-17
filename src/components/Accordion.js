import React, { Component } from 'react'
import {
    Button , Icon , List , ListItem , Text
} from 'native-base';
import {
    StyleSheet , 
    View , 
    TouchableOpacity
} from 'react-native';
import colors from '../styles/colors';

class Accordion extends Component{

    constructor(props){
        super(props);
        this.state = {
            isOpen : false
        }
    }

    toggle = () => {
        this.setState({isOpen : !this.state.isOpen})
    }

    render(){
        const { title } = this.props;
        return(
            <View style={styles.accordion}>
                <TouchableOpacity onPress={this.toggle}>
                    <View style={styles.accordionHeader}>
                        <View style={{ flex: 1 }}>
                            <Icon type="FontAwesome5" name={this.state.isOpen ? "chevron-up" : "chevron-down"} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <Text>{title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.accordionBody}>
                    <List style={{height : this.state.isOpen ? undefined : 0 , opacity : this.state.isOpen ? 1 : 0}}>
                        <ListItem>
                            <Icon type="FontAwesome5" name="chevron-left" />
                            <Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</Text>
                        </ListItem>
                        <ListItem>
                            <Icon type="FontAwesome5" name="chevron-left" />
                            <Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</Text>
                        </ListItem>
                        <ListItem>
                            <Icon type="FontAwesome5" name="chevron-left" />
                            <Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</Text>
                        </ListItem>
                        <ListItem>
                            <Icon type="FontAwesome5" name="chevron-left" />
                            <Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</Text>
                        </ListItem>
                    </List>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    accordion : {
        width : "95%" , 
        alignSelf : "center" , 
        padding : "1%", 
        backgroundColor : "rgba(255,255,255,0.5)",
        borderRadius : 15 , 
        marginVertical : 10
    } ,
    accordionHeader : {
        flexDirection : "row" , 
        display : "flex" , 
        justifyContent : "center" , 
        padding : "3%"
    } , 
    accordionBody : {
       
    }
})

export default Accordion;