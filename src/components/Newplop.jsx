import axios from 'axios';

const Newplop = () => {

  return (
    
    <div>

    <form>
      <label htmlFor="title">TITLE: </label>
      <input type="text" id="title" onChange={(ev) => setTitle(ev.target.value)}/>

      <label htmlFor="location">LOCATION: </label>
      <input type="text" id="location" onChange={(ev) => setLocation(ev.target.value)}/>

      <label htmlFor="color">COLOR: </label>
      <select value="">
        <option value="brown">Shade of Brown</option>
        <option value="gray">Shade of Gray</option>
        <option value="black">Black</option>
        <option value="green">Shad of Green</option>
        <option value="notsure">I'm not sure how to describe it</option>
        </select>

      <label htmlFor="size">SIZE (in diameter): </label>  
        <select value="">
        <option value="">Shade of Brown</option>
        <option value="gray">Shade of Gray</option>
        <option value="black">Black</option>
        <option value="green">Shad of Green</option>
        <option value="notsure">I'm not sure how to describe it</option>
        </select>







   

      <label htmlFor="consistency">Author: </label>
      <input type="text" id="consistency" onChange={(ev) => setColor(ev.target.value)}/>


      <input type="submit" />   
    </form>

    </div>
    );
}

export default Newplop;