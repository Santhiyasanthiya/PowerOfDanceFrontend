import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import HomeContent from "./Components/HomePage/HomeContent";
import HomeCard from "./Components/HomePage/HomeCard";
import HomeAward from "./Components/HomePage/HomeAward";
import HomeCount from "./Components/HomePage/HomeCount";
import Footer from "./Components/Footer/Footer";
import About from "./Components/AboutPage/About";
import Event from "./Components/EventPage/Event";
import Style from "./Components/Style/Style";
import ContactPage from "./auth/ContactPage";

function App() {
  return (
    <Router>
      {/* Global Header */}
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <HomeContent />
              <HomeCard />
              <HomeAward />
              <HomeCount />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
           <Route path="/styles" element={<Style />} />
      <Route path="/contact" element={<ContactPage />} />
      </Routes>

  
      <Footer />
    </Router>
  );
}

export default App;
