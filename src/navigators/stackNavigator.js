import {createStackNavigator, createAppContainer} from 'react-navigation';
import AddQuestion from '../screens/addQuestion';
import AddTweet from '../screens/addTweet';
import AppIntro from "../screens/appIntro";
import MainScreen from '../screens/mainScreen';
import Profile from "../screens/profile";
import SignIn from "../screens/signIn";
import SignUp from "../screens/signUp";
import userProfile from '../screens/userProfile';

const stackNavigator = createStackNavigator({
    AppIntro : {screen : AppIntro},
    AddQuestion : {screen : AddQuestion},
    AddTweet : {screen : AddTweet},
    MainScreen : {screen : MainScreen},
    Profile : {screen : Profile},
    SignIn : {screen : SignIn},
    SignUp : {screen : SignUp},
    userProfile : {screen : userProfile},
},{
    headerMode : 'none',
    mode : "card"
})

const Stack = createAppContainer(stackNavigator)
export default Stack