import { Link } from 'react-router-dom';

const Plops = ({ plopPosts }) => {
 
    return (
      <div>
        <Link to="/">
        <h2>BACK TO HOME</h2>
        </Link>
        <h3>Plops</h3>
   
        {plopPosts.map((aplop, idx) => (
          <h4 
          key={idx}>
            <Link to={`./plop-photo/${aplop.id}`}>
            Title: 
            </Link>
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
            {aplop.fields.PicUpload ? <img src={aplop.fields.PicUpload} alt="dog poop"></img> : null}
          </h4>
        ))}
   
     
       </div>
    );

}

export default Plops;