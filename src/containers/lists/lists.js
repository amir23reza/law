import React ,  {Component} from 'react';
import {
    StyleSheet , 
    Text , 
    View
} from 'react-native';
import { List, ListItem } from 'native-base';
import colors from '../../styles/colors';

class Lists extends Component{
    render(){
        const {lists} = this.props;
        console.log(lists);
        return(
            <List>
                {
                    lists.map((list)=>{
                        list.items.map((item) => {
                            return(
                                
                                    <ListItem>
                                        <Text>{item.content}</Text>
                                    </ListItem>
                            )
                        })
                    })
                }
            </List>
        )
    }
}

const styles = StyleSheet.create({

})

export default Lists;

