import Home from "./pages/Home";
import Footer from "./components/Footer";
import database from "./data/database";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="relative overflow-visible min-h-screen">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer contact={database.contact} />
    </div>
  );
}
