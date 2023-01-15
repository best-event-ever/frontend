import ReactDOM from "react-dom/client";
import "./App.css";
// import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage";
import { EventDetailsPage } from "./pages/EventDetailsPage";
import { LoginPage } from "./pages/LoginPage";
import { ProfilPage } from "./pages/ProfilPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";
import { Navbar } from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <h1>Hallo</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/event-details" element={<EventDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/profile" element={<ProfilPage />} />
          <Route path="/results" element={<SearchResultsPage />} />
          <Route path="/shoppingcart" element={<ShoppingCartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
