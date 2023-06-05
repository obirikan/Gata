import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Industries from "./Pages/Industries";
import OurCompany from "./Pages/OurCompany";
import { OurSolutions } from "./Pages/OurSolutions";
import TalkToUs from "./Pages/TalkToUs";
import Confirmation from "./Pages/Confirmation";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/our-company" element={<OurCompany />} />
          <Route path="/our-solutions" element={<OurSolutions />} />
          <Route path="/talk-to-us" element={<TalkToUs />} />
          <Route path="/talk-to-us/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
