import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Courses></Courses>
      <p><small>© Amirul Islam Limon, all rights reserved.</small></p>
    </div>
  );
}

export default App;
