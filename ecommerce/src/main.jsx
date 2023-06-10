import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme.jsx'
import {GlobalStyle} from './common/global/GlobalStyle.jsx'
import { Header } from './common/components/header/headerWithSearch/Header.jsx'
import { Home } from './pages/Home.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <Home/>
    </ThemeProvider>
  </React.StrictMode>,
)
