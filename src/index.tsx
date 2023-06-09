import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CssBaseline } from '@mui/material';
import {theme} from './theme'
import { ThemeProvider } from '@mui/material/styles';
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

