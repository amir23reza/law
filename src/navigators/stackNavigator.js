import {createStackNavigator, createAppContainer} from 'react-navigation';
import AddQuestion from '../screens/addQuestion';
import AddTweet from '../screens/addTweet';
import AppIntro from "../screens/appIntro";
import MainScreen from '../screens/mainScreen';
import Profile from "../screens/profile";
import SignIn from "../screens/signIn";
import SignUp from "../screens/signUp";
import UserProfile from '../screens/userProfile';
import Information from '../screens/information';
import Detail from '../screens/detail';

const stackNavigator = createStackNavigator({
    AppIntro : {screen : AppIntro},
    AddQuestion : {screen : AddQuestion},
    AddTweet : {screen : AddTweet},
    MainScreen : {screen : MainScreen},
    Profile : {screen : Profile},
    SignIn : {screen : SignIn},
    SignUp : {screen : SignUp},
    UserProfile: { screen: UserProfile},
    Information: { screen: Information},
    Detail: { screen: Detail },
},{
    headerMode : 'none',
    mode : "card"
})

const Stack = createAppContainer(stackNavigator)
export default Stack