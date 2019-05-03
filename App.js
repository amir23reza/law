import React, {Component} from 'react';
import X from './src/screens/information';
import Y from './src/navigators/tabNavigator'
 
export default class App extends Component{
  componentWillMount() {
    console.disableYellowBox = true;
  }
  

  render() {
    return (
      <X />
    )
  }
}