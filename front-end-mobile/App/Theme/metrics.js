import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
export const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 24,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 48,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  buttonRadius: 4,
  drawerWidth: 300,
  icons: {
    tiny: 18,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  fonts: {
    h1: 38,
    h2: 34,
    h3: 30,
    input: 18,
    regular: 17,
    medium: 14,
    small: 12,
  }
}
