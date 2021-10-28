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
      Below you will find<span><a href="https://www.purina.co.uk/articles/dogs/health/digestion/guide-to-dog-poop">information</a></span> on dog poo.
      </p>
    </div>
  );

}

export default About;