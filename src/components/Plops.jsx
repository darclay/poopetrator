import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const API_URL = `https://api.airtable.com/v0/appAT4ne9vTP46u1M/Table%201?api_key=${process.env.REACT_APP_API_KEY}`

const Plops = () => {
  const [ plopPosts, setPlopPosts ] = useState([]); 
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${API_URL}`);
      setPlopPosts(response.data.records);
    }
    getData();
  }, []);


  
    return (
      <div>
        <Link to="/">
        <h2>BACK TO HOME</h2>
        </Link>
        <h3>Plops</h3>
        {plopPosts.map((aplop) => (
          <Link to={`/plop-photo/${aplop.id}`}>
          <h4 
          key={aplop.id}>
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
            {aplop.fields.PicUpload ? <img src={aplop.fields.PicUpload} alt="dog poop"></img> : null}
          </h4>
          </Link>
        ))}
      
      <PlopPhoto 
      plopPosts={plopPosts}
      />

      </div>
    );

}

export default Plops;