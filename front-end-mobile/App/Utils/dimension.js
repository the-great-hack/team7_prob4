/**
 * Use this file for reusable lib functions
 */

 import { Dimensions, Platform } from 'react-native';
 
export const isIphoneX = () => {
    const dim = Dimensions.get('window');

    return (
        // This has to be iOS
        Platform.OS === 'ios' &&

        // Check either, iPhone X or XR
        (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
    );
}

export const isIPhoneXSize = dim => {
    return dim.height == 812 || dim.width == 812;
}

export const isIPhoneXrSize = dim => {
    return dim.height == 896 || dim.width == 896;
}