import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';

const API_KEY= "keyuIN18WVkKH2hMu"
const API_URL = "https://api.airtable.com/v0/appAT4ne9vTP46u1M/Table%201?api_key="


const FeelingCheeky = () => {
  const [ plopPosts, setPlopPosts ] = useState([]); 
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${API_URL}${API_KEY}`);
      setPlopPosts(response.data.records);
    }
    getData();
  }, []);

  
  return (
    <div>
      <Link to="/">
        <h2>BACK TO HOME</h2>
        </Link>
      <h2>Feeling Cheeky</h2>
      
     
      
    </div>
  );

}

export default FeelingCheeky;