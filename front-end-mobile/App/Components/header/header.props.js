import PropTypes from 'prop-types'
// import { IconTypes } from "../icon"

export const HeaderProps =  {
  /**
   * Main header, e.g. POWERED BY BOWSER
   */
  headerTx: PropTypes.string,

  /**
   * header non-i18n
   */
  headerText: PropTypes.string,

  /**
   * Icon that should appear on the left
   */
  leftIcon: PropTypes.string,

  /**
   * What happens when you press the left icon
   */
  onLeftPress: PropTypes.func,

  /**
   * Icon that should appear on the right
   */
  rightIcon: PropTypes.string,

  /**
   * What happens when you press the right icon
   */
  onRightPress:  PropTypes.func,

  /**
   * Container style overrides.
   */
  style:  PropTypes.object,

  /**
   * Title style overrides.
   */
  titleStyle:  PropTypes.object,
}
