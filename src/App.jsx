import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { AnimatedRoutes } from './components/AnimatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="content">
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;