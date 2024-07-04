import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Menubar from './pages/Menubar';
import ChatContainer from './pages/chatbot/ChatContainer';



const App = () => {

  return (
    <Routes>
      <Route 매path='/' element = {<Menubar />}></Route>
      <Route path='/home' element = {<Home />}></Route>
      <Route path='/movies' element = {<Movie />}></Route>
      <Route path='/chat' element = {<ChatContainer />}></Route>
    </Routes>
  )
};

export default App;
