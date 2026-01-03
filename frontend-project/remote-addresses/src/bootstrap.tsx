import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { StyledEngineProvider } from '@mui/material/styles';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      {/* <StyledEngineProvider injectFirst> */}
        <App />
    {/* </StyledEngineProvider> */}
    </React.StrictMode>,
  );
}
