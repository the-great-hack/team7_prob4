import React from 'react'
import { PropTypes } from 'prop-types';

import {
    View,
    ImageBackground
} from 'react-native';
import { Screen } from '../../Components/screen'
import * as styles from './myOrders.styles';
import {
    assets
} from '../../Assets';


export default class MyOrdersScreen extends React.Component {

    render() {
        return (
            <View testID="MyOrdersScreen" style={styles.FULL}>
                <Screen style={styles.CONTAINER} preset="scroll" >
                    <ImageBackground
                        source={assets.myOrders}
                        style={styles.IMAGE_FULL}
                        resizeMode={'stretch'}
                    />
                </Screen>
            </View>
        )
    }
}

