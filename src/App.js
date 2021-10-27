import { Link, Route } from "react-router-dom";
import Newplop from "./components/Newplop.jsx";
import Plops from "./components/Plops.jsx";
import About from "./components/About.jsx";
import FeelingCheeky from "./components/FeelingCheeky.jsx";
import PlopPhoto from "./components/PlopPhoto.jsx";
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

const API_URL = `https://api.airtable.com/v0/appAT4ne9vTP46u1M/Table%201?api_key=${process.env.REACT_APP_API_KEY}`

const App = () => {
  const [ plopPosts, setPlopPosts ] = useState([]); 
  const [ togglePost, setTogglePost ] = useState(true);
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${API_URL}`);
      setPlopPosts(response.data.records);  
      console.log(response.data.records);    
    }
    getData();
  }, [togglePost]);
  
  return (  
    <div>
     <h1>POOPETRATOR</h1>
     
     <Route path="/"  exact>
      <h4>
        The Source for Documenting Dog Poo
        <br/>
        Do you know whose krinkle cutter caused the mess?
        <br/>
        This is the best place to name the Poopetrator.
      </h4>
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
    <PlopPhoto/>
    </Route>

    <Route path="/about">
    <About/>
    </Route>

    <Route path="/feeling-cheeky">
    <FeelingCheeky/>
    </Route>
    </div>
  );
}

export default App;
