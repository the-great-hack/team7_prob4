import * as React from "react"
import { View, TextInput } from "react-native"
import { color, spacing, typography } from "../../Theme"
// import { translate } from "../../i18n"
import { Text } from "../text"
import { mergeAll, flatten } from "ramda"

// the base styling for the container
const CONTAINER = {
  paddingVertical: spacing[2],
  // borderColor: '#ccc',
  // borderWidth: 1,
}

// the base styling for the TextInput
const INPUT = {
  fontFamily: typography.primary,
  color: color.dim,
  minHeight: 30,
  fontSize: 16,
  backgroundColor: color.palette.white,
  paddingTop: spacing[1],
}

// currently we have no presets, but that changes quickly when you build your app.
// const PRESETS: { [name: string]: ViewStyle } = {
const PRESETS = {
  default: {},
}

const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]))
}

/**
 * A component which has a label and an input together.
 */
export const TextField = props => {
  const {
    placeholderTx,
    placeholder,
    labelTx,
    label,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    name,
    textChangeHandler,
    error,
    ...rest
  } = props
  let containerStyle = { ...CONTAINER, ...PRESETS[preset] }
  containerStyle = enhance(containerStyle, styleOverride)

  let inputStyle = INPUT
  inputStyle = enhance(inputStyle, inputStyleOverride)
  const actualPlaceholder = placeholderTx ? placeholderTx : placeholder
  const onChangeText = (value) => {
    textChangeHandler(name, value)
  }

  return (
    <View style={containerStyle}>
      <Text preset="fieldLabel" tx={labelTx} text={label} />
      <TextInput
        placeholder={actualPlaceholder}
        placeholderTextColor={color.palette.lighterGrey}
        underlineColorAndroid={color.transparent}
        {...rest}
        style={inputStyle}
        ref={forwardedRef}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
      {
        error ?
          error.map((err, i) => (
            <Text preset="error" key={i} text={err} />
          )) : null
      }
    </View>
  )
}
