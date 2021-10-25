import axios from 'axios';



const Newplop = () => {

  return (
    
    <div>

    <form>
      <label htmlFor="title">TITLE: </label>
      <input type="text" id="title" placeholder="TITLE"/>

      <label htmlFor="location">LOCATION: </label>
      <input type="text" id="location" placeholder="LOCATION"/>

      <input type="submit" />   
    </form>

    </div>
    );
}

export default Newplop;