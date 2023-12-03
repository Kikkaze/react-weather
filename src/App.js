import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
          <Weather defaultCity="Milan"/>
      <footer>Built with React by Federica De Giorgis, open-source on<a href="https://github.com/Kikkaze/react-weather" target="blank">Github</a>and hosted on<a href="https://flourishing-manatee-42f743.netlify.app" target="blank">Netlify</a>
      <div>Background Image by kjpargeter on Freepik</div>
      </footer>
    </div>
  );
}