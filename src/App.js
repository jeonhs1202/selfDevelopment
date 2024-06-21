import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Menubar from './pages/Menubar';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Menubar />}></Route>
      <Route path='/home' element = {<Home />}></Route>
      <Route path='/movies' element = {<Movie />}></Route>
    </Routes>
  );
}

export default App;
