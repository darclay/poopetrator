import axios from 'axios';



const Newplop = () => {

  return (
    
    <div>

    <form>
      <label htmlFor="title"></label>
      <input type="text" id="title" placeholder="TITLE"/>

      <label htmlFor="poopetrator"></label>
      <input type="text" id="poopetrator" placeholder="POOPETRATOR (IF KNOWN)"/>

      <label htmlFor="location"></label>
      <input type="text" id="location" placeholder="LOCATION"/>

      <label htmlFor="color"></label>
      <input type="text" id="color" placeholder="COLOR"/>

      <label htmlFor="size"></label>
      <input type="text" id="size" placeholder="SIZE"/>
      
      <label htmlFor="consistency"></label>
      <input type="text" id="consistency" placeholder="CONSISTENCY"/>
      <br/>
      <input type="submit" />   
    </form>

    </div>
    );
}

export default Newplop;