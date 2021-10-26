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
      const results = response.data.records;
      console.log(results);
      const randIndex = Math.floor(Math.random() * results.length);
      setPlopPosts(results[randIndex]);
      console.log(typeof plopPosts);
    // -------------------------------------------
      const photoDis = plopPosts.fields.PicUpload[0].thumbnails.large.url;
    
      if (photoDis) {
      console.log(plopPosts.fields.PicUpload[0].thumbnails.large.url);
      }else {
      console.log("no pic available");
      }
    
    
    }
    getData();
  }, []);

  return (
    <div>
      <Link to="/">
        <h2>BACK TO HOME</h2>
        </Link>
      <h2>Feeling Cheeky</h2>
      {/* <img src={plopPosts.fields.PicUpload[0].thumbnails.large.url} alt="dog poop"></img> */}

     
      
    </div>
  );

}

export default FeelingCheeky;