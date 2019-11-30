import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import {
    createAppContainer
} from 'react-navigation'

import LocationsScreen from '../Containers/SearchScreen';
import MyOrdersScreen from '../Containers/MyOrdersScreen';
import DiscoverScreen from '../Containers/DiscoverScreen';
import { color, palette } from '../Theme';
const BottomTabNavigator = createMaterialBottomTabNavigator({
    Discover: { screen: DiscoverScreen },
    Search: { screen: LocationsScreen },
    Orders: { screen: MyOrdersScreen },
}, {
    initialRouteName: 'Discover',
    activeColor: palette.white,
    inactiveColor: palette.offWhite,
    barStyle: { backgroundColor: color.primary },
})


export default createAppContainer(BottomTabNavigator);