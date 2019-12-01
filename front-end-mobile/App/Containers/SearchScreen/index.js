import React from 'react'
import { PropTypes } from 'prop-types'

import { View } from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {
    onFetchRecommendations
} from '../../Stores/Discover/Actions';

import { Screen } from '../../Components/screen'
import { Text } from '../../Components/text'
import { Button } from '../../Components/button'

import * as styles from './search.styles';

class SearchScreen extends React.Component {

    makeLookupCall = (type) => {
        this.props.onFetchRecommendations(type);
        const { navigation } = this.props;
        navigation.navigate('Discover')
    }

    render() {
        return (
            <View testID="SearchScreen" style={styles.FULL}>
                <Screen style={styles.CONTAINER} preset="scroll" >
                    <Text style={styles.TITLE} preset="header" text="Search" />
                    <Button
                        preset="primary"
                        text="Recommended"
                        onPress={() => this.makeLookupCall(0)}
                    />
                    <Button
                        preset="primary"
                        text="Recommended ML"
                        onPress={() => this.makeLookupCall(1)}
                    />
                    <Button
                        preset="primary"
                        text="User 1"
                        onPress={() => this.makeLookupCall(1)}
                    />
                    <Button
                        preset="primary"
                        text="User 2"
                        onPress={() => this.makeLookupCall(2)}
                    />
                    <Button
                        preset="primary"
                        text="User 3"
                        onPress={() => this.makeLookupCall(3)}
                    />

                    <Button
                        preset="default"
                        text="Featured"
                    />
                    <Button
                        preset="default"
                        text="Popular"
                    />
                    <Button
                        preset="default"
                        text="Nearby"
                    />
                    <Button
                        preset="default"
                        text="Based on Time"
                    />
                    <Button
                        preset="default"
                        text="Weather Conditions"
                    />
                    <Button
                        preset="default"
                        text="Local Events"
                    />
                    <Button
                        preset="default"
                        text="User Interests"
                    />
                </Screen>

            </View>
        )
    }
}

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
    onFetchRecommendations: payload => dispatch(onFetchRecommendations(payload)),

})
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)