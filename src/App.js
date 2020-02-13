import React from 'react';
import './App.css';
import ChatBox from './components/ChatBox'

const userActual = 'IKKU'
function App() {
  return (
    <div className="App">
      <div className="principal">
        <ChatBox
          userActual={userActual}
        />
      </div>
    </div>
  );
}

export default App;
