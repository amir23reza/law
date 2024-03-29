import React, {Component} from 'react';
import Splash from './src/screens/splashScreen';
import Stack from './src/navigators/stackNavigator';
import X from './src/screens/detail'
// --- redux --- //
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './src/redux/reducers/reducer';
import {getUser} from './src/redux/actions/actions';
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
    getUser(store.dispatch);
  }
  
  render() {
    setTimeout(() => {
      this.setState({isSplash : false})
    }, 500);
    return (
        <Provider store={store}>
          {this.state.isSplash ? <Splash /> : <Stack />}
        </Provider>
    )
  }
}

// { this.state.isSplash ? <Splash /> : <Stack /> } <X />