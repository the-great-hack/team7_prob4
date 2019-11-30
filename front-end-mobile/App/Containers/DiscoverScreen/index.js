import React from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView,
    SectionList
} from 'react-native'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import {
    makeSelectRecommendations,
    makeSelectFetchRecommendationsError,
    makeSelectFetchRecommendationsSuccess
} from '../../Stores/Discover/Selectors';

import {
    onFetchRecommendations
} from '../../Stores/Discover/Actions';


import { Screen } from '../../Components/screen'
import { Text } from '../../Components/text'
import { FoodItem } from '../../Components/food-item';

import * as styles from './discover.styles';

const DATA = [
    {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
    },
];

class DiscoverScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {
                demo: "example",
            },
            serverError: null,
            errors: {},
            formSubmitted: false,
            showLoader: false,
        };
    }

    componentDidMount() {
        this.props.onFetchRecommendations();
    }

    renderItem = ({ item }) => {
        return <FoodItem />;
    }

    render() {
        return (
            <View testID="DiscoverScreen" style={styles.FULL}>
                <Screen style={styles.CONTAINER} preset="scroll" >
                    <Text style={styles.TITLE} preset="header" text="Discover" />
                </Screen>
                <SectionList
                    sections={DATA}
                    stickySectionHeadersEnabled={false}
                    numColumns={2}
                    keyExtractor={(item, index) => item + index}
                    renderItem={this.renderItem}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.TITLE} text={title} />
                    )}
                />
            </View>
        )
    }
};


const mapStateToProps = createStructuredSelector({
    recommendations: makeSelectRecommendations(),
    recommendationsError: makeSelectFetchRecommendationsError(),
    recommendationsSuccess: makeSelectFetchRecommendationsSuccess(),
});


// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
    onFetchRecommendations: payload => dispatch(onFetchRecommendations(payload)),

})

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverScreen)