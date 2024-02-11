import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import Upload from './components/Upload.jsx'
import './style.scss';
import { useState } from 'react';

function App() {
  // const [home, setHome] = useState(0);
    return (
      <div className='app'>
        <Header />
      <div className='content'>
        <HomePage />
        <Upload />
      </div>
    </div>
    )
  }

export default App;
