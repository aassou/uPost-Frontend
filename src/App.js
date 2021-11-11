import React from 'react';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {
        user ? (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
