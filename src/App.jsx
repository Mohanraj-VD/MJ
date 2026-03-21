import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './pages/Home';
import Cover from './components/Cover';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!isOpened ? (
        <Cover key="cover" onOpen={() => setIsOpened(true)} />
      ) : (
        <Home key="home" />
      )}
    </AnimatePresence>
  );
}

export default App;