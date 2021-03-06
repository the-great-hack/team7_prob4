

import { spacing } from '../../Theme/spacing'

export const FULL = {
    flex: 1,
}
export const CONTAINER = {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
    // paddingHorizontal: spacing[4],
}

const BOLD = {
    fontWeight: "bold"
}

export const TITLE = {
    ...BOLD,
    fontSize: 28,
    lineHeight: 38,
    textAlign: "center",
    marginBottom: spacing[5],
}

export const IMAGE_FULL = {
    width: '100%',
    height: '100%',

}

export const BUTTON = {
    position: 'absolute',
    zIndex: 1,
    bottom: spacing[2],
    right: spacing[2]
}