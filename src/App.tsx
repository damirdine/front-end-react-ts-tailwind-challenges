import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/_index";
import QrCodePage from "./challenges/qr-code-component-main/qrCode";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr-code" element={<QrCodePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
