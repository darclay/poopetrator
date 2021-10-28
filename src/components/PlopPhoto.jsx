import { useParams, Link } from "react-router-dom";
import "./PlopPhoto.css";


const PlopPhoto = ({ plopPosts }) => {
  const params = useParams();
  const details = plopPosts.find(pic => pic.id === params.id);
  
  return (
    <div>
      <Link to="/Plops">
      <h2>Back to Plops</h2>
      </Link>
      {details.fields.PicUpload ? <img src={details.fields.PicUpload} alt="dog poop"></img> : null}
    </div>
  )
}

export default PlopPhoto;