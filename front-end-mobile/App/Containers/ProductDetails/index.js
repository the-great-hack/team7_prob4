import React from 'react'
import { PropTypes } from 'prop-types'
import { NavigationActions, StackActions } from 'react-navigation';
import {
    View,
    ImageBackground,
    Alert
} from 'react-native'
import { Screen } from '../../Components/screen'
import { Button } from '../../Components/button'
import * as styles from './productDetails.styles';
import {
    assets
} from '../../Assets';
const SCREENS_DICT = {
    1: 'productDetails',
    2: 'customizeOrder',
    3: 'placeOrder',
    4: 'addAddress',
    5: 'paymentHandling'
}

export default class ProductDetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoader: false,
            currentScreen: 1,

        };
    }

    paymentSuccess = () => {
        Alert.alert('Hurrayyy!',
            'Your Order has placed Successfully',
            [{
                text: 'Done', onPress: () => {
                    const { navigation } = this.props;
                    navigation.dispatch(
                        StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })]
                        })
                    );
                    navigation.navigate('Orders')
                }
            }])
    }

    renderPaymentMethods = () => {
        return (
            <React.Fragment>
                <Button
                    onPress={this.paymentSuccess}
                    preset="primary"
                    text='Cash on Delivery'
                />
                <Button
                    onPress={this.paymentSuccess}
                    preset="primary"
                    text='Credit Card'
                />
                <Button
                    onPress={this.paymentSuccess}
                    preset="primary"
                    text='Careem Credit'
                />
                <Button
                    onPress={this.paymentSuccess}
                    preset="primary"
                    text='Jazz Cash'
                />
                <Button
                    onPress={this.paymentSuccess}
                    preset="primary"
                    text='Mobile Account'
                />
                <Button
                    onPress={this.paymentSuccess}
                    preset="primary"
                    text='QR Code'
                />
                <Button
                    onPress={this.paymentSuccess}
                    preset="primary"
                    text='NFC'
                />
            </React.Fragment>
        );
    }

    renderProductDetails = () => {
        return (
            <React.Fragment>
                <ImageBackground
                    source={assets.productDetails}
                    style={styles.IMAGE_FULL}
                    resizeMode={'stretch'}
                />
                <View style={styles.RIGHT_BUTTONS_WRAPPER}>
                    <Button
                        onPress={() => {
                            this.setState({ currentScreen: 2 })
                        }}
                        preset="primary"
                        text='Customize Order'
                        style={styles.LEFT_BUTTON}
                    />
                    <Button
                        onPress={() => {
                            this.setState({ currentScreen: 3 })
                        }}
                        preset="primary"
                        text='Place Order'
                        style={styles.RIGHT_BUTTON}
                    />
                </View>
            </React.Fragment>
        );
    }

    renderCustomizeProduct = () => {
        return (
            <React.Fragment>
                <ImageBackground
                    source={assets[SCREENS_DICT[2]]}
                    style={styles.IMAGE_FULL}
                    resizeMode={'stretch'}
                />
                <Button
                    onPress={() => {
                        this.setState({ currentScreen: 3 })
                    }}
                    preset="primary"
                    text='Place Order'
                    style={styles.RIGHT_BUTTON}
                />
            </React.Fragment>
        );
    }

    renderPlaceOrder = () => {
        return (
            <React.Fragment>
                <ImageBackground
                    source={assets[SCREENS_DICT[3]]}
                    style={styles.IMAGE_FULL}
                    resizeMode={'stretch'}
                />
                <Button
                    onPress={() => {
                        this.setState({ currentScreen: 4 })
                    }}
                    preset="primary"
                    text='Add Address'
                    style={styles.RIGHT_BUTTON}
                />
            </React.Fragment>
        );
    }

    renderAddAddress = () => {
        return (
            <React.Fragment>
                <ImageBackground
                    source={assets[SCREENS_DICT[4]]}
                    style={styles.IMAGE_FULL}
                    resizeMode={'stretch'}
                />
                <Button
                    onPress={() => {
                        this.setState({ currentScreen: 5 })
                    }}
                    preset="primary"
                    text='Add New Method'
                    style={styles.RIGHT_BUTTON}
                />
            </React.Fragment>
        );
    }

    renderScreens = () => {
        const { currentScreen } = this.state;
        switch (currentScreen) {
            case 2:
                return this.renderCustomizeProduct();
            case 3:
                return this.renderPlaceOrder();
            case 4:
                return this.renderAddAddress();
            case 5:
                return this.renderPaymentMethods();
            default:
                return this.renderProductDetails();
        }
    }
    render() {
        return (
            <View testID="ProductDetailsScreen" style={styles.FULL}>
                <Screen style={styles.CONTAINER} preset="scroll" >
                    {this.renderScreens()}
                </Screen>
            </View>
        )
    }
}

