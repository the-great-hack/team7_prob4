

import { spacing } from '../../Theme/spacing'

export const FULL = {
    flex: 1,
}
export const CONTAINER = {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
    paddingHorizontal: spacing[4],
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