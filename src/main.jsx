import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './global-styles.jsx';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';
import { FirebaseContext } from './context/firebase.jsx';

const config = {
  apiKey: 'AIzaSyC_BC2ov54e0IjiUwIjZiEY4MUyZEEyeao',
  authDomain: 'netflix-clone-1adf4.firebaseapp.com',
  projectId: 'netflix-clone-1adf4',
  storageBucket: 'netflix-clone-1adf4.firebasestorage.app',
  messagingSenderId: '739993842657',
  appId: '1:739993842657:web:60f540c741f3be777bd8a0',
};

const firebase = initializeApp(config)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </StrictMode>
);
