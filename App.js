import React, {Component} from 'react';
import Splash from './src/screens/splashScreen';
import Stack from './src/navigators/stackNavigator';
// --- redux --- //
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './src/redux/reducers/reducer';
// --- redux --- //

const store = createStore(reducer); 
export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      isSplash : true
    }
  }

  componentWillMount() {
    console.disableYellowBox = true;
  }
  render() {
    setTimeout(() => {
      this.setState({isSplash : false})
    }, 2000);
    return (
        <Provider store={store}>
          {this.state.isSplash ? <Splash /> : <Stack />}
        </Provider>
    )
  }
}