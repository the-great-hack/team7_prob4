import * as React from "react"
import { View } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button"
import { Icon } from "../icon"
import { Text } from "../text"
import { spacing } from "../../Theme"
// import { translate } from "../../i18n/"

// static styles
const ROOT = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "flex-start",
}
const TITLE = { textAlign: "center" }
const TITLE_MIDDLE = { flex: 1, justifyContent: "center" }
const LEFT = { width: 32 }
const RIGHT = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export const Header = props => {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    // headerTx,
    style,
    titleStyle,
  } = props
  const header = headerText || ""

  return (
    <View style={{ ...ROOT, ...style }}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon icon={leftIcon} />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text style={{ ...TITLE, ...titleStyle }} text={header} />
      </View>
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon icon={rightIcon} />
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}


Header.propTypes = HeaderProps