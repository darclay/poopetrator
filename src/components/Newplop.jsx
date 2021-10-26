import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const API_URL = "https://api.airtable.com/v0/appAT4ne9vTP46u1M/Table%201?api_key=keyuIN18WVkKH2hMu";

const Newplop = () => {
  const [ Title, setTitle ] = useState('');
  const [ Poopetrator, setPoopetrator ] = useState('');
  const [ Location, setLocation ] = useState('');
  // const [ MapApp, setMapApp ] = useState('');
  const [ Color, setColor ] = useState('');
  const [ Size, setSize ] = useState('');
  const [ Consistency, setConsistency ] = useState('');
  // const [ Picupload, setPicupload ] = useState('');

  const [ toggleFetch, setToggleFetch ] = useState(false);
  
  const handleSubmit = async (ev) => {
      ev.preventDefault();
      console.log('button clicked');
      const newEntry = {
       records: [{ 
        fields: {
          Title,
          Poopetrator,
          Location,
          // MapApp,
          Color,
          Size,
          Consistency,
          // Picupload,
        }
       }]
      }
      await axios.post(API_URL,newEntry)
      setToggleFetch(!toggleFetch);
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
      <label htmlFor="picupload"></label>
      {/* <input type="file" id="picupload" placeholder="UPLOAD / TAKE A PIC" onChange={(ev) => setPicupload(ev.target.value)}/> */}
      <input type="submit" />   
    </form>

    </div>
    );
}

export default Newplop;