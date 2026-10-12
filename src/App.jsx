import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Bottom } from './components/Bottom';
import { AnimatedRoutes } from './components/AnimatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="content">
          <AnimatedRoutes />
        </main>
        <Bottom />
      </div>
    </BrowserRouter>
  );
}

export default App;