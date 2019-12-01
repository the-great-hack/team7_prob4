import React from 'react'
import {
    View,
    FlatList,
    ActivityIndicator
} from 'react-native'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import {
    makeSelectRecommendations,
    makeSelectFetchRecommendationsError,
    makeSelectFetchRecommendationsSuccess,
    makeSelectIsFetchingRecommendations
} from '../../Stores/Discover/Selectors';

import {
    onFetchRecommendations
} from '../../Stores/Discover/Actions';


import { Screen } from '../../Components/screen'
import { Text } from '../../Components/text'
import { FoodItem } from '../../Components/food-item';
import { color } from '../../Theme/color';
import * as styles from './discover.styles';

const DATA = ['Pizza', 'Burger', 'Risotto', 'French Fries', 'Onion Rings', 'Fried Shrimps',
    'Water', 'Coke', 'Beer', 'Cheese Cake', 'Ice Cream'];

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
        this.props.onFetchRecommendations(1);
    }

    renderItem = ({ item, index }) => {
        return <FoodItem
            item={item}
            index={index}
            onPress={() => {
                const { navigate } = this.props.navigation;
                navigate('ProductDetailsScreen');
            }}
        />;
    }

    render() {
        const {
            isFetchingRecommendations,
            recommendations
        } = this.props;

        return (
            <View testID="DiscoverScreen" style={styles.FULL}>
                <Screen style={styles.CONTAINER} preset="scroll" >
                    <Text style={styles.TITLE} preset="header" text="Discover" />
                    {isFetchingRecommendations ?
                        <ActivityIndicator size="large" color={color.primary} />
                        :
                        <FlatList
                            data={recommendations}
                            numColumns={2}
                            keyExtractor={(item, index) => item + index}
                            renderItem={this.renderItem}
                        />
                    }
                </Screen>

            </View>
        )
    }
};


const mapStateToProps = createStructuredSelector({
    recommendations: makeSelectRecommendations(),
    recommendationsError: makeSelectFetchRecommendationsError(),
    recommendationsSuccess: makeSelectFetchRecommendationsSuccess(),
    isFetchingRecommendations: makeSelectIsFetchingRecommendations(),
});


// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
    onFetchRecommendations: payload => dispatch(onFetchRecommendations(payload)),

})

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverScreen)