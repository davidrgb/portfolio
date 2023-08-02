import { useState } from 'react';

import Wrapper from './components/Wrapper';

import './App.css';

function App() {
  const [hideIntro, setHideIntro] = useState(false);

  return (
    <Wrapper />
  );
}

export default App;
