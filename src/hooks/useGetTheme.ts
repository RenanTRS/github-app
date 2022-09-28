//Hook to get the theme

import { useSelector } from 'react-redux'

export const useGetTheme = () => {
  const theme = useSelector((state: any) => state.theme.themeR.value.theme)

  return theme
}
