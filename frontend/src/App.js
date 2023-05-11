import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Services from './pages/Services';
import E404 from './pages/E404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:serviceId" element={<Service />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
