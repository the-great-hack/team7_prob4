

import { spacing } from '../../Theme/spacing'

export const FULL = {
    flex: 1,
}
export const CONTAINER = {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#e5e5e5',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2]
}

export const IMAGE = {
    width: '100%',
    height: 150,
    borderRadius: 50
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

export const ITEM = {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
}