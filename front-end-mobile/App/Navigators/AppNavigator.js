import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

/**App Stack */
import BottomTabNavigator from './BottomTabNavigator';

const App = createStackNavigator({
  HomeScreen: {
    screen: BottomTabNavigator,
    path: 'pms/home',
  },
}, {
  initialRouteName: 'HomeScreen',
  // headerMode: 'none'
})

export default createAppContainer(App)