import axios from "axios";
import { useEffect, useState } from 'react';

const API_KEY= "keyuIN18WVkKH2hMu"
const API_URL = "https://api.airtable.com/v0/appAT4ne9vTP46u1M/Table%201?api_key="

const Plops = () => {
  const [ plopPosts, setPlopPosts ] = useState([]); 
  const [ toggleFetch, setToggleFetch ] = useState(false);

  useEffect(() => {
    console.log('Getting Data');

    const getData = async () => {
      const response = await axios.get(`${API_URL}${API_KEY}`);
      console.log(response.data.records);
      setPlopPosts(response.data.records);
    }

    getData();
  }, [toggleFetch]);


  
    return (
      <div>
        <h2>Plops</h2>
        {plopPosts.map((aplop) => (
          <h4 key={aplop.id}>{aplop.fields.Size}</h4>
        ))}
      </div>
    );

}

export default Plops;