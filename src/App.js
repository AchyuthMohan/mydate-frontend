// import logo from './logo.svg';
import './App.css';
import ScrollToTop from './utils/ScrollToTop';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
      <MainPage/>

      </BrowserRouter>
    </div>
  );
}

export default App;
