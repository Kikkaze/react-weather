import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
          <Weather defaultCity="Milan"/>
      <footer>Built with React by Federica De Giorgis and open-source on <a href="https://github.com/Kikkaze/react-weather" target="blank">Github</a>.</footer>
    </div>
  );
}