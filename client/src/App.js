import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import GameDetail from './components/GameDetail/GameDetail';
import NewGame from './components/NewGame/NewGame';
import NotFound from './components/NotFound/NotFound';

//Ulises estuvo aquí

function App() {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/videogame/:idGame" element={<GameDetail />} />
                    <Route path="/NewGame" element={<NewGame />} />
                    <Route path="*" element={<NotFound />} />
               </Routes>
          </BrowserRouter>
     );
}

export default App;
