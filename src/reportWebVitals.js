// Utilitaire de Performance - Mesure et rapporte les métriques de performance web
const reportWebVitals = onPerfEntry => {
  // Si une fonction de rapport de performance est fournie, l'utiliser pour enregistrer les métriques
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Exporte la fonction reportWebVitals par défaut
export default reportWebVitals;
