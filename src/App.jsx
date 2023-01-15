import "./App.css";
import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage";
import { EventDetailsPage } from "./pages/EventDetailsPage";
import { LoginPage } from "./pages/LoginPage";
import { ProfilPage } from "./pages/ProfilPage";
import { RegistrationPage } from "./pages/RegisterationPage";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";
import { Navbar } from "./components/Navbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello Vite + React</h1>
      <h2>Was wird das hier?</h2>
    </div>
  );
}

export default App;
