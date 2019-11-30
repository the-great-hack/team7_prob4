import PropTypes from 'prop-types'

// import { TextPresets } from "./text.presets"

export const TextProps = {
  /**
   * Children components.
   */
  children: PropTypes.node,

  /**
   * Text which is looked up via i18n.
   */
  tx: PropTypes.string,

  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions: PropTypes.object,

  /**
   * The text to display if not using `tx` or nested components.
   */
  text: PropTypes.string,

  /**
   * An optional style override useful for padding & margin.
   */
  style: PropTypes.object,

  /**
   * One of the different types of text presets.
   */
  preset: PropTypes.string,//TextPresets
}
