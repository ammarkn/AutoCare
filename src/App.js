import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQ from "./components/FAQ";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <header></header>
      <Router>
        <Routes>
          <Route path="/faq" element={<FAQ />} />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
