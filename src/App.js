import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Chat from './pages/Chat';
import Auth from './pages/Auth';
import { BrowserRouter } from 'react-router-dom';


function App() {

  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const configureAuth = async () => {
      const auth = await fetch('http://localhost:3000/users/authorized', {credentials: 'include'});

      if (auth.status === 200) {
        setAuthorized(true);
      }
    }

    configureAuth();
  }, []);

  const changeAuth = (auth) => {
    setAuthorized(auth);
  }

  return (
    <BrowserRouter>
      <div className="App">
        { authorized ? <Chat /> : <Auth changeAuth={changeAuth}/>}
      </div>
    </BrowserRouter>
  );
}

export default App;
