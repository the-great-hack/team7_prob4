import { color, typography, spacing } from "../../Theme"

/**
 * All text will start off looking like this.
 */
const BASE= {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: "bold" },

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: 24, fontWeight: "bold" },

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 16, color: color.palette.black, fontWeight: "500" },

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, fontSize: 9, color: color.dim },
  
  error: { ...BASE, fontSize: 12, color: color.error, paddingTop: spacing[1]}, 
}

/**
 * A list of preset names.
 */
export const TextPresets = Object.keys(presets)
