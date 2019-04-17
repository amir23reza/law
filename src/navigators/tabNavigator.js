import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import LatestNews from '../containers/tabs/latestNews';
import PopularNews from '../containers/tabs/popularNews';
import Tweets from '../containers/tabs/tweets';
import colors from '../styles/colors';

const TabNavigator = createMaterialTopTabNavigator({
    "آخرین سوالات ": LatestNews,
    "محبوب ترین سوالات": PopularNews,
    "توییت ها": Tweets
} , {
    tabBarOptions : {
        activeTintColor : colors.clouds , 
        inactiveTintColor : colors.concrete , 
        showIcon : true , 
        indicatorStyle : {
            //style for the bottom line of tabs
            color : colors.emerland , 
            backgroundColor : colors.clouds
        } ,
        iconStyle : {
            color : colors.clouds
        } , 
        style : {
            backgroundColor : colors.wetasphalt , 
        }
    }
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;