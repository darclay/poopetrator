import { Link, Route } from "react-router-dom";
import Newplop from "./components/Newplop.jsx";
import Plops from "./components/Plops.jsx";
import About from "./components/About.jsx";
import FeelingCheeky from "./components/FeelingCheeky.jsx";
import PlopPhoto from "./components/PlopPhoto.jsx";
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

// const API_URL = `https://api.airtable.com/v0/appAT4ne9vTP46u1M/Table%201?api_key=${process.env.REACT_APP_API_KEY}`
const API_URL = 'https://api.airtable.com/v0/appAT4ne9vTP46u1M/Table%201?api_key=keyuIN18WVkKH2hMu'


const App = () => {
  const [ plopPosts, setPlopPosts ] = useState([]); 
  const [ togglePost, setTogglePost ] = useState(true);
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${API_URL}`);
      setPlopPosts(response.data.records);     
    }
    getData();
  }, [togglePost]);
  
  return (  
    <div>
    <div id="applicationTitle"> 
    <h3>THE</h3>
    <h1>POOPETRATOR</h1>
    </div>
          
     <Route path="/"  exact>
      <h4>
        <span id="sent1">
        The Source for Documenting Dog Poo
        </span>
        <span id="sent2">
        Do you know whose krinkle cutter caused the mess?
        <br/>
        This is the best place to name the Poopetrator.
        </span>
      </h4>
      <div className="flexDiv">
          <Link to="/newplop">
          <button id="newPlop">NEW PLOP</button>
          </Link>

          <Link to="/plops">
          <button id="plops">PLOPS</button>
          </Link>

          <Link to="/feeling-cheeky">
          <button id="FEELING CHEEKY">FEELING CHEEKY</button>
          </Link> 

          <Link to="/about">
          <button id="about">ABOUT</button>
          </Link>
      </div>
    </Route>

    <Route path="/newplop">
    <Newplop
    togglePost={togglePost}
    setTogglePost={setTogglePost}
    />
    </Route>

    <Route path="/plops">
    <Plops
    plopPosts={plopPosts}
    />
    </Route>

    <Route path="/plop-photo/:id">
    <PlopPhoto
    plopPosts={plopPosts}
    />
    </Route>

    <Route path="/about">
    <About/>
    </Route>

    <Route path="/feeling-cheeky">
    <FeelingCheeky/>
    </Route>
    
    <i className="fas fa-poo"></i>
    <footer>2021</footer>
    </div>
  );
}

export default App;
