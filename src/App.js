import { Link, Route } from "react-router-dom";
import Newplop from "./components/Newplop.jsx";
import Plops from "./components/Plops.jsx";


const App = () => {
  return (
    
    
    
    <div>
     <h1>POOPETRATOR</h1>
     
     <Route path="/"  exact>
     <h4>Find, Pin, & Document Dog Poo in Your Neighborhood.
       <br/>
       Do you know whose krinkle cutter caused the mess?
       <br/>
       This is the best place to name the Poopetrator.
        </h4>
      
      <button id="newPlop"></button>
      <button id="plops"></button>
      <button id="mapit"></button>
      <button id="feelingCheeky"></button>
    </Route>

    <Route path="/newplop">
    <Newplop/>
    </Route>


    </div>
  );
}

export default App;
