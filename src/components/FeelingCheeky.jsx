import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
import "./FeelingCheeky.css";

const API_URL = `https://api.airtable.com/v0/appAT4ne9vTP46u1M/Table%201?api_key=${process.env.REACT_APP_API_KEY}`


const FeelingCheeky = () => {
  const [ plopPosts, setPlopPosts ] = useState();
   
 
    useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${API_URL}`);
      const results = response.data.records;
      const randIndex = Math.floor(Math.random() * results.length);
      setPlopPosts(results[randIndex]);
    }
    getData();
  },[]);

  return (
    <div>
      <Link to="/">
        <button>BACK TO HOME</button>
        </Link> 
      <h2>Feeling Cheeky</h2>
      <p>Want a random photo of dog poo?  Here you go!</p>
      {plopPosts ? <img alt='' src={plopPosts.fields.PicUpload}></img> : null}
      

     
      
    </div>
  );

}

export default FeelingCheeky;