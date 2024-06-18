import React from 'react'
import { ThemeModeWrapper } from './styled'

export const ThemeModeButton = ({ toggleTheme, themeMode }) => {
  return (
    <ThemeModeWrapper onClick={toggleTheme}>
      {themeMode === 'lightTheme' ? '🌝' : '🌚'}
    </ThemeModeWrapper>
  )
}

// styled.jsx
import { css, styled } from 'styled-components'

export const ThemeModeWrapper = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  width: 80px;
  margin: 10px;
  border: none;
  border-radius: 10px;

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.colors.colorMain};
      box-shadow: ${(props) => props.theme.colors.colorShadow};
    `
  }}
`
const theme = themeMode === 'lightTheme' ? lightTheme : darkTheme

const toggleTheme = () => {
  if (themeMode === 'lightTheme') {
    setThemeMode('darkTheme')
    window.localStorage.setItem('theme', 'darkTheme')
  } else {
    setThemeMode('lightTheme')
    window.localStorage.setItem('theme', 'lightTheme')
  }
}

const localThemeMode = window.localStorage.getItem('theme' || 'lightTheme')
const [themeMode, setThemeMode] = useState(localThemeMode)
