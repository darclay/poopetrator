import { useParams } from "react-router-dom";
import Plops from "./Plops.jsx";

const PlopPhoto = ({ plopPosts }) => {

  
  return (
    <div>
      <h2>Photo</h2>
      <p>{plopPosts.fields.Title}</p>
    </div>
  )
}

export default PlopPhoto;