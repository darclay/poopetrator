import { Link, Route } from "react-router-dom";
import Newplop from "./components/Newplop.jsx";
import Plops from "./components/Plops.jsx";
import Mapit from "./components/Mapit.jsx";
import FeelingCheeky from "./components/FeelingCheeky.jsx";



const App = () => {
  return (
    
    
    
    <div>
     <h1>POOPETRATOR</h1>
     
     <Route path="/"  exact>
      <h4>
        Find, Pin, & Document Dog Poo in Your Neighborhood.
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

          <Link to="/mapit">
          <button id="mapit">MAPIT</button>
          </Link>

          <Link to="/feeling-cheeky">
          <button id="FEELING CHEEKY">FEELING CHEEKY</button>
          </Link> 
    </Route>

    <Route path="/newplop">
    <Newplop/>
    </Route>

    <Route path="/plops">
    <Plops/>
    </Route>

    <Route path="/mapit">
    <Mapit/>
    </Route>

    <Route path="/feeling-cheeky">
    <FeelingCheeky/>
    </Route>


    </div>
  );
}

export default App;
