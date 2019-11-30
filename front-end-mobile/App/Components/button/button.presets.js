import { color, spacing } from "../../Theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW = {
  marginTop: spacing[3],
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  borderRadius: 4,
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT = {
  paddingHorizontal: spacing[3],
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW, backgroundColor: color.palette.green },
  default: { ...BASE_VIEW, backgroundColor: color.palette.lightGrey },

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
    color: color.palette.link,
  },
}

export const textPresets = {
  primary: { ...BASE_TEXT, fontSize: 18, color: color.palette.white },
  link: {
    ...BASE_TEXT,
    color: color.palette.link,
    paddingHorizontal: 0,
    paddingVertical: 0,
  }
}

/**
 * A list of preset names.
 */
// export type ButtonPresetNames = keyof typeof viewPresets
export const ButtonPresetNames = Object.keys(viewPresets)
