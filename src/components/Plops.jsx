import { Link } from 'react-router-dom';
import "./Plops.css";

const Plops = ({ plopPosts }) => {
 
    return (
      <div>
        <Link to="/">
        <button>HOME</button>
        </Link>
        <h2>Plops</h2>
      <div class="postSection">
        {plopPosts.map((aplop, idx) => (
          <div 
          key={idx}>
           <Link id="postText" to={`./plop-photo/${aplop.id}`}> 
            <h5>Title:</h5>
            <br/>
            {aplop.fields.Title}
            <br/>
            <h5>Date:</h5> 
            <br/>
            {aplop.fields.DateTime}
            <br/>
            <h5>Location:</h5> 
            <br/>
            {aplop.fields.Location}
            <br/>
            <h5>Poopetrator:</h5> 
            <br/>
            {aplop.fields.Poopetrator}
            <br/>
            <h5>Color:</h5> 
            <br/>
            {aplop.fields.Color}            
            <br/>
            <h5>Size:</h5> 
            <br/>
            {aplop.fields.Size}
            <br/>
            <h5>Consistency:</h5> 
            <br/>
            {aplop.fields.Consistency} 
            <br/>
           </Link>
          </div>
       
        ))}
      </div>
        <Link to="/">
          <button>HOME</button>
        </Link>
      </div>
    );

}

export default Plops;