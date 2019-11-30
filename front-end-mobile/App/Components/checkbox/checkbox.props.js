import PropTypes from 'prop-types'

export const CheckboxProps = {
  /**
   * Additional container style. Useful for margins.
   */
  style: PropTypes.object,

  /**
   * Additional outline style.
   */
  outlineStyle: PropTypes.object,

  /**
   * Additional fill style. Only visible when checked.
   */
  fillStyle: PropTypes.object,

  /**
   * Is the checkbox checked?
   */
  value: PropTypes.bool,

  /**
   * The text to display if there isn't a tx.
   */
  text: PropTypes.string,

  /**
   * The i18n lookup key.
   */
  tx: PropTypes.string,

  /**
   * Multiline or clipped single line?
   */
  multiline: PropTypes.bool,

  /**
   * Fires when the user tabs to change the value.
   */
  onToggle: PropTypes.func,
}
