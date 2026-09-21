import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Members } from './pages/Members';
import { Music } from './pages/Music';
import { Contacts } from './pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;