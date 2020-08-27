import React from 'react';
import './App.css';

// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="appBody">
        <Sidebar />
        {/* feed */}
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
