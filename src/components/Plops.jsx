import { Link } from 'react-router-dom';

const Plops = ({ plopPosts }) => {
 
    return (
      <div>
        <Link to="/">
        <button>HOME</button>
        </Link>
        <h2>Plops</h2>
   
        {plopPosts.map((aplop, idx) => (
          
          <h4 
          key={idx}>
           <Link to={`./plop-photo/${aplop.id}`}> 
            Title: 
            <br/>
            {aplop.fields.Title}
            <br/>
            Date: 
            <br/>
            {aplop.fields.DateTime}
            <br/>
            Location: 
            <br/>
            {aplop.fields.Location}
            <br/>
            Poopetrator: 
            <br/>
            {aplop.fields.Poopetrator}
            <br/>
            Color: 
            <br/>
            {aplop.fields.Color}            
            <br/>
            Size: 
            <br/>
            {aplop.fields.Size}
            <br/>
            Consistency: 
            <br/>
            {aplop.fields.Consistency} 
            <br/>
           </Link>
          </h4>
       
        ))}
   
     
       </div>
    );

}

export default Plops;