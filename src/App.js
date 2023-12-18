import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
          <Weather defaultCity="Milan"/>
      <footer>Built with React by<a href="https://www.linkedin.com/in/federica-de-giorgis-3b96a8208/" target="_blank" title="Federica De Giorgis LinkedIn page" rel="noreferrer">Federica De Giorgis,</a>open-source on<a href="https://github.com/Kikkaze/react-weather" target="_blank" title="GitHub repository" rel="noreferrer">Github</a>and hosted on Netlify.
      <div>Background Image by kjpargeter on Freepik. Icons by<a href="https://www.instagram.com/kicca_design_illustration/" target="_blank" title="Federica De Giorgis Instagram page" rel="noreferrer">Federica De Giorgis.</a></div>
      </footer>
    </div>
  );
}