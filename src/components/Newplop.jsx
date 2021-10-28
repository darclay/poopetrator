import axios from 'axios';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import "./Newplop.css";



const API_URL = `https://api.airtable.com/v0/appAT4ne9vTP46u1M/Table%201?api_key=${process.env.REACT_APP_API_KEY}`;

const Newplop = ({ togglePost, setTogglePost }) => {
  const [ Title, setTitle ] = useState('');
  const [ Poopetrator, setPoopetrator ] = useState('');
  const [ Location, setLocation ] = useState('');
  const [ Color, setColor ] = useState('');
  const [ Size, setSize ] = useState('');
  const [ Consistency, setConsistency ] = useState('');
  const [ PicUpload, setPicUpload ] = useState('');
  const [ redirectPlops, setRedirectPlops ] = useState(false); 
  
  
  const handleSubmit = async (ev) => {
      ev.preventDefault();
      console.log('button clicked');
      const newEntry = {
       records: [{ 
        fields: {
          Title,
          Poopetrator,
          Location,
          Color,
          Size,
          Consistency,
          PicUpload,
        }
       }]
      }
      await axios.post(API_URL,newEntry)
      setTogglePost(!togglePost);
      setRedirectPlops(true);
  }
  if (redirectPlops) {
    return < Redirect to = "/Plops"/>  
  }


  return (
    
    <div>
    <Link to="/">
        <h2>BACK TO HOME</h2>
        </Link>
    <h4>PLOP IT</h4>
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="title"></label>
      <input type="text" id="title" placeholder="TITLE" onChange={(ev) => setTitle(ev.target.value)}/>

      <label htmlFor="poopetrator"></label>
      <input type="text" id="poopetrator" placeholder="POOPETRATOR (IF KNOWN)" onChange={(ev) => setPoopetrator(ev.target.value)}/>

      <label htmlFor="location"></label>
      <input type="text" id="location" placeholder="LOCATION" onChange={(ev) => setLocation(ev.target.value)}/>

      <label htmlFor="color"></label>
      <input type="text" id="color" placeholder="COLOR" onChange={(ev) => setColor(ev.target.value)}/>

      <label htmlFor="size"></label>
      <input type="text" id="size" placeholder="SIZE" onChange={(ev) => setSize(ev.target.value)}/>
      
      <label htmlFor="consistency"></label>
      <input type="text" id="consistency" placeholder="CONSISTENCY" onChange={(ev) => setConsistency(ev.target.value)}/>
      <br/>
      <label htmlFor="picupload">You must enter the direct link from IMGUR (...i.imgur.com...)</label><br/>
      <input type="text" id="picupload" placeholder="PIC-POST IMGUR URL" onChange={(ev) => setPicUpload(ev.target.value)}/>
      <input type="submit" />   
    </form>

    </div>
    );
}

export default Newplop;