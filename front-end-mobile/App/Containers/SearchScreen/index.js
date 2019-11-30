import React from 'react'
import { PropTypes } from 'prop-types'

import { View } from 'react-native'
import { Screen } from '../../Components/screen'
import { Text } from '../../Components/text'

import * as styles from './search.styles';

export default class SearchScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoader: false,
        };
    }

    render() {
        return (
            <View testID="SearchScreen" style={styles.FULL}>
                <Screen style={styles.CONTAINER} preset="scroll" >
                    <Text style={styles.TITLE} preset="header" text="Search" />
                </Screen>

            </View>
        )
    }
}

