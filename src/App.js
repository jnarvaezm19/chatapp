import React, {useState} from 'react';
import './App.css';
import ChatBox from './components/ChatBox'
import Login from './components/Login'


function App() {

  const [userActual, setUserActual] = useState('')

  const handleSubmit = (user) => {
    setUserActual(user)
  }
  
  return (
    <div className="App">
      <div className="principal">
        {
          userActual ?
            <ChatBox
              userActual={userActual}
            />
          :
            <Login
              handleSubmit={handleSubmit}
            />
        }
      </div>
    </div>
  );
}

export default App;
