import PropTypes from 'prop-types'
// import { FormRowPresets } from "./form-row.presets"

/**
 * The properties you can pass to FormRow.
 */
export const FormRowProps = {
  /**
   * Children components.
   */
   children: PropTypes.node,

  /**
   * Override the container style... useful for margins and padding.
   */
  style: PropTypes.object,

  /**
   * The type of border.
   */
  preset: PropTypes.string, //FormRowPresets
}
