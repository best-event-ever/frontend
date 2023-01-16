import ReactDOM from "react-dom/client";
import "./App.css";
// import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage";
import { EventDetailsPage } from "./pages/EventDetailsPage";
import { LoginPage } from "./pages/LoginPage";
import { ProfileUserPage } from "./pages/ProfileUserPage";
import { ProfileOrgPage } from "./pages/ProfileOrgPage.jsx";
import { RegistrationUserPage } from "./pages/RegistrationUserPage";
import { RegistrationOrgPage } from "./pages/RegistrationOrgPage";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";
import { Navbar } from "./components/Navbar.jsx";
import { Header } from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import our custom CSS
import "./scss/style.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/event-details" element={<EventDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration-user" element={<RegistrationUserPage />} />
          <Route path="/registration-org" element={<RegistrationOrgPage />} />
          <Route path="/profile-user" element={<ProfileUserPage />} />
          <Route path="/profile-org" element={<ProfileOrgPage />} />
          <Route path="/results" element={<SearchResultsPage />} />
          <Route path="/shoppingcart" element={<ShoppingCartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
