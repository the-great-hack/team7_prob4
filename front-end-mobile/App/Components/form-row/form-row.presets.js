import { color, spacing } from "../../Theme"

/**
 * The size of the border radius.
 */
const RADIUS = 8

/**
 * The default style of the container.
 */
const ROOT = {
  borderWidth: 1,
  borderColor: color.line,
  paddingVertical: spacing[1],
  paddingHorizontal: spacing[2],
}

/**
 * What each of the presets look like.
 */
export const PRESETS = {
  /**
   * Rounded borders on the the top only.
   */
  top: {
    ...ROOT,
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
    borderBottomWidth: 0,
  },
  /**
   * No rounded borders.
   */
  middle: {
    ...ROOT,
    borderBottomWidth: 0,
  },
  /**
   * Rounded borders on the bottom.
   */
  bottom: {
    ...ROOT,
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: RADIUS,
  },
  /**
   * Rounded borders everywhere.
   */
  soloRound: {
    ...ROOT,
    borderRadius: RADIUS,
  },
  /**
   * Straight borders everywhere.
   */
  soloStraight: {
    ...ROOT,
  },
  /**
   * Transparent borders useful to keep things lined up.
   */
  clear: {
    ...ROOT,
    borderColor: color.transparent,
  },
}

/**
 * The names of the presets supported by FormRow.
 */
export const FormRowPresets = Object.keys(PRESETS)
