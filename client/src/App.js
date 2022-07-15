import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage"
import Home from "./components/Home/Home"
import GameDetail from "./components/GameDetail/GameDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/videogame/:idGame" element={<GameDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
