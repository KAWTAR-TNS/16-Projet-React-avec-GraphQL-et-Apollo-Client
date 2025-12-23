// Composant Principal - Élément React central de l'application
import logo from './logo.svg';
import './App.css';

// Fonction composant App
function App() {
  // Affiche l'interface utilisateur de l'application
  return (
    <div className="App">
      <header className="App-header">
        {/* Affiche le logo React */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* Lien principal vers la documentation React */}
        <p>
          Modifiez <code>src/App.js</code> et enregistrez pour recharger.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apprendre React
        </a>
      </header>
    </div>
  );
}

// Exporte le composant App par défaut
export default App;
