import React from 'react'
import { PropTypes } from 'prop-types'

import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    SectionList
} from 'react-native'

import { Screen } from '../../Components/screen'
import { Text } from '../../Components/text'

import * as styles from './preferences.styles';

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

export default class PrefrencesScreen extends React.Component {

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

    renderItem = ({ title }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }

    render() {
        return (
            <View testID="PrefrencesScreen" style={styles.FULL}>
                <Screen style={styles.CONTAINER} preset="scroll" >
                    <Text style={styles.TITLE} preset="header" text=" Prefrences" />
                </Screen>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.TITLE}>{title}</Text>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
    },
    title: {
        fontSize: 24,
    },
});


