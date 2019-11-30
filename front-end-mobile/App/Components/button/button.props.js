import { ViewStyle, TextStyle } from "react-native"
// import { ButtonPresetNames } from "./button.presets"
import PropTypes from 'prop-types'

export const ButtonProps  = {
  /**
   * Text which is looked up via i18n.
   */
  tx: PropTypes.string,

  /**
   * The text to display if not using `tx` or nested components.
   */
  text: PropTypes.string,

  /**
   * An optional style override useful for padding & margin.
   */
  style: PropTypes.object,

  /**
   * An optional style override useful for the button text.
   */
  textStyle: PropTypes.object,

  /**
   * One of the different types of text presets.
   */
  preset: PropTypes.string, //ButtonPresetNames

  /**
   * One of the different types of text presets.
   */
  children: PropTypes.node,
}
