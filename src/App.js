import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'

function App() {
  return (
    // BEM
    <>
    <div className="app">     
      <Sidebar />
      
      <Feed />
      
      {/* Widgets */}

    </div>
    </>
  );
}

export default App;
