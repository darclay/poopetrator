import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_KEY= "keyuIN18WVkKH2hMu"
const API_URL = "https://api.airtable.com/v0/appAT4ne9vTP46u1M/Table%201?api_key="

const Plops = () => {
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
        <h3>Plops</h3>
        {plopPosts.map((aplop) => (
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
            {/* <img src={aplop.fields.PicUpload[0].thumbnails.large.url} alt="dog poop"></img> */}
          </h4>
        ))}


      </div>
    );

}

export default Plops;