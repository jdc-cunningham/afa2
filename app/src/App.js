import { useEffect } from 'react';
import './css-reset.css';
import './App.css';
import Worker from './services/webworker';

function App() {
  useEffect(() => {
    Worker();
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
