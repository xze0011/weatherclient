import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Weather from "./Pages/Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Weather />}
          />

        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
