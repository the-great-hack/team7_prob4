import PropTypes from 'prop-types'

export const SwitchProps = {
  /**
   * On or off.
   */
  value: PropTypes.bool,
  /**
   * Fires when the on/off switch triggers.
   *
   * @param newValue The new value we're switching to.
   */
  onToggle: PropTypes.func,

  /**
   * A style override to apply to the container.  Useful for margins and paddings.
   */
  style: PropTypes.object,

  /**
   * Additional track styling when on.
   */
  trackOnStyle: PropTypes.object,

  /**
   * Additional track styling when off.
   */
  trackOffStyle: PropTypes.object,

  /**
   * Additional thumb styling when on.
   */
  thumbOnStyle: PropTypes.object,

  /**
   * Additional thumb styling when off.
   */
  thumbOffStyle: PropTypes.object,
}
