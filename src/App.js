import './App.scss';

import NavBar from './Components/NavBar';
import {Switch, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
              </Route>
              <Route path="/about" exact>
              </Route>
              <Route path="/portfolios" exact>
              </Route>
              <Route path="/contact" exact>
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;