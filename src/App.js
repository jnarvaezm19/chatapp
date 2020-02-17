import React, {useState} from 'react';
import './App.css';
import ChatBox from './components/ChatBox'
import Login from './components/Login'
import Background from './components/Background';


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
          <div>
            <Background/>
            <ChatBox
              userActual={userActual}
            />
          </div>
            
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
