import { Link } from 'react-router-dom';
import "./About.css";

const About = () => {
    
  
  return (
    <div>
      <Link to="/">
        <button>BACK TO HOME</button>
        </Link>
      <h2>About</h2>
      <p id="aboutInfo">
      Does poo upset you?
      <br/>
      Well, your dog's poo should be important to you.  Did you know that you can tell a lot about your dog's health from their doodoo?<br/>Scotology or Coprology is the science behind looking at a doocky and inducing not only what your animal eats but the animals overall health.
      <br/>

      Click <a href="https://www.purina.co.uk/articles/dogs/health/digestion/guide-to-dog-poop" target="_blank">HERE</a> to see more information on your dogs poo and you.
      </p>

      <p>https://en.wikipedia.org/wiki/Scatology</p>
      <br/>
      <br/>
      <p>https://theconversation.com/what-can-you-learn-from-studying-an-animals-scat-126307</p>
      <p id="end"></p>
    </div>
  );

}

export default About;