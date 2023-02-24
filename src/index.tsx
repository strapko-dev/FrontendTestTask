import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      light: '#FFFFFF',
      main: '#F5F5F5'
    },
    secondary: {
      main: '#FB9400'
    },
    text: {
      primary: '#212121',
      secondary: '#424242',
      disabled: '#757575',
    }
  },
  typography: {
    fontFamily: "'Urbanist', sans-serif"
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <>
      <CssBaseline />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </>
  </ThemeProvider>
);
