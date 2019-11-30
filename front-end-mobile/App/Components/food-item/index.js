import React from 'react'
import { PropTypes } from 'prop-types'

import {
    View,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    SectionList,
    TouchableOpacity
} from 'react-native'

import * as styles from './foodItems.styles';
import { Text } from '../text';

export const FoodItem = (props) => {
    return (
        <TouchableOpacity style={styles.CONTAINER}>
            <ImageBackground
                source={{ uri: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=Bzo3z1cD' }}
                style={styles.IMAGE}
            />
            <Text perset="secondary" text='Pizza' />
        </TouchableOpacity>
    );
}

