import PropTypes from 'prop-types'
// import { KeyboardOffsets, ScreenPresets } from "./screen.presets"

export const ScreenProps = {
  /**
   * Children components.
   */
  children: PropTypes.node,

  /**
   * An optional style override useful for padding & margin.
   */
  style: PropTypes.object,

  /**
   * One of the different types of presets.
   */
  preset: PropTypes.string, //ScreenPresets

  /**
   * An optional background color
   */
  backgroundColor: PropTypes.string,

  /**
   * An optional status bar setting. Defaults to light-content.
   */
  statusBar: PropTypes.string,

  /**
   * Should we not wrap in SafeAreaView Defaults to false.
   */
  unsafe: PropTypes.bool,

  /**
   * By how much should we offset the keyboard Defaults to none.
   */
  keyboardOffset: PropTypes.string, //KeyboardOffsets
}
