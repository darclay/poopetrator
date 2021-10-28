import { Link } from 'react-router-dom';
import "./Plops.css";

const Plops = ({ plopPosts }) => {
 
    return (
      <div>
        <Link to="/">
        <button>HOME</button>
        </Link>
        <h2>Plops</h2>
      <div className="postSection">
        {plopPosts.map((aplop, idx) => (
          <div 
          key={idx}>
           <Link id="postText" to={`./plop-photo/${aplop.id}`}> 
            <h5>Title:</h5>
            <br/>
            <p>{aplop.fields.Title}</p>
            <br/>
            <h5>Date:</h5> 
            <br/>
            <p>{aplop.fields.DateTime}</p>
            <br/>
            <h5>Location:</h5> 
            <br/>
            <p>{aplop.fields.Location}</p>
            <br/>
            <h5>Poopetrator:</h5> 
            <br/>
            <p>{aplop.fields.Poopetrator}</p>
            <br/>
            <h5>Color:</h5> 
            <br/>
            <p>{aplop.fields.Color}</p>
            <br/>
            <h5>Size:</h5> 
            <br/>
            <p>{aplop.fields.Size}</p>
            <br/>
            <h5>Consistency:</h5> 
            <br/>
            <p>{aplop.fields.Consistency}</p>
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