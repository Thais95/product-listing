import React from 'react';
import ReactDOM from 'react-dom/client';
import { Homepage } from './pages/Homepage';
import { ThemeProvider } from '@emotion/react';
import { DefaultTheme } from "./themes/theme";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <Homepage />
    </ThemeProvider>
  </React.StrictMode>
);
