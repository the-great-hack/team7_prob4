import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import {
    createAppContainer
} from 'react-navigation'

import LocationsScreen from '../Containers/SearchScreen';
import ShiftsScreen from '../Containers/SettingsScreen';
import DiscoverScreen from '../Containers/DiscoverScreen';
import { color, palette } from '../Theme';
const BottomTabNavigator = createMaterialBottomTabNavigator({
    Discover: { screen: DiscoverScreen },
    Search: { screen: LocationsScreen },
    Orders: { screen: ShiftsScreen },
}, {
    initialRouteName: 'Discover',
    activeColor: palette.white,
    inactiveColor: palette.offWhite,
    barStyle: { backgroundColor: color.primary },
})


export default createAppContainer(BottomTabNavigator);