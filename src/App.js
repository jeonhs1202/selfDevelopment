import React,{ useState }  from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Movie from './pages/Movie';
// import Menubar from './pages/Menubar';
import ChatHistory from './pages/ChatHistory';
import ChatInput from './pages/ChatInput';

// function App() {
//   return (
//     <Routes>
//       <Route path='/' element = {<Menubar />}></Route>
//       <Route path='/home' element = {<Home />}></Route>
//       <Route path='/movies' element = {<Movie />}></Route>
//     </Routes>
//   );
// }


const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="app-container">
      <h1>Retro Chat</h1>
      <ChatHistory messages={messages} />
      <ChatInput onSend={addMessage} />
    </div>
  );
};

export default App;
