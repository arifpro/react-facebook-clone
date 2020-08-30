import React from 'react';
import './App.css';

// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Login from './components/Login/Login';

// context api
import { useStateValue } from './state/Provider'

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      { 
        !user ? <Login />
        : (
          <>
            <Header />  
            <div className="appBody">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
