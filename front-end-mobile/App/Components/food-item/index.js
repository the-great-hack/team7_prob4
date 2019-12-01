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
import { assets } from '../../Assets';

const IMG_DIC = {
    0: assets.burger,
    1: assets.biryani,
    2: assets.pizza,
    3: assets.sandwich
}

export const FoodItem = (props) => {
    const {
        itemId,
        itemName,
        itemPrice,
        itemCategory
    } = props.item;

    return (
        <TouchableOpacity
            style={styles.CONTAINER}
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <ImageBackground
                source={IMG_DIC[props.index % 4]}
                style={styles.IMAGE}
            />
            <Text perset="secondary" text={itemName} />
            <Text perset="secondary" text={itemPrice} />
            <Text perset="secondary" text={itemCategory} />


        </TouchableOpacity>
    );
}

