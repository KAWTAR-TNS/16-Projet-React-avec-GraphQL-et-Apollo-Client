// Point d'Entrée - Initialise l'application React
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crée l'élément racine pour le rendu de React
const root = ReactDOM.createRoot(document.getElementById('root'));
// Affiche le composant App dans l'élément racine
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionnel : Mesurer la performance de l'application (voir reportWebVitals.js)
reportWebVitals();
