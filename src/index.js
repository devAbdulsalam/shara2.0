import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingContextProvider from './context/LoadingContext'
import { AuthContextProvider } from './context/AuthContext'
import { WalletContextProvider } from './context/WalletContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WalletContextProvider>
        <AuthContextProvider>
          <LoadingContextProvider>
            <Routes>
              <Route path='/*' element={<App />}>
              </Route>
            </Routes>
          </LoadingContextProvider>
        </AuthContextProvider>
      </WalletContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


