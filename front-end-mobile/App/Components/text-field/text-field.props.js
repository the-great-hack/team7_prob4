import Proptypes from 'prop-types'

export const TextFieldProps  = {
  /**
   * The placeholder i18n key.
   */
  placeholderTx: Proptypes.string,

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder: Proptypes.string,

  /**
   * The label i18n key.
   */
  labelTx: Proptypes.string,

  /**
   * The label text if no labelTx is provided.
   */
  label: Proptypes.string,

  /**
   * The field name.
   */
  name: Proptypes.string,

  /**
   * The callback for onChangeText.
   */
  textChangeHandler: Proptypes.func,

  /**
   * The field in case of error.
   */
  error: Proptypes.oneOfType([Proptypes.object,Proptypes.array]),


  /**
   * Optional container style overrides useful for margins & padding.
   */
  style: Proptypes.oneOfType([Proptypes.object,Proptypes.array]),

  /**
   * Optional style overrides for the input.
   */
  inputStyle: Proptypes.oneOfType([Proptypes.object,Proptypes.array]),

  /**
   * Various look & feels.
   */
  preset: Proptypes.string,

  forwardedRef: Proptypes.any,
}
