import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import GameDetail from './components/GameDetail/GameDetail';
import GameAdd from './components/GameAdd/GameAdd';
import NotFound from './components/NotFound/NotFound';

function App() {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/videogame/:idGame" element={<GameDetail />} />
                    <Route path="/NewGame" element={<GameAdd />} />
                    <Route path="*" element={<NotFound />} />
               </Routes>
          </BrowserRouter>
     );
}

export default App;
