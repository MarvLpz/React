import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import { Link } from "react-router-dom";
import App from './App';
function Display() {
  return (
    <div className="Display">
      <header className="App-header">
        <a>Display</a>
        <Link to="/">App</Link>
      </header>
    </div>
  );
}

export default Display;
