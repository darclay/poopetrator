import { useParams } from "react-router-dom";

const PlopPhoto = ({ plopPosts }) => {
  const {id} = useParams()
  
  return (
    <div>
      <h2>Photo - { id }</h2>
    </div>
  )
}

export default PlopPhoto;