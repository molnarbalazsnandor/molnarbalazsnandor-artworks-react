import { useEffect, useState } from "react";
import Artwork from './Artwork'
import LoadingMask from "./LoadingMask";

const apiKey = "9fcbde6d-b1de-4546-8974-eef81e8f90f4";
let apiAddress = `https://api.harvardartmuseums.org/object?size=100&page=1?&apikey=${apiKey}`;

function Artworks() {
  const [arts, setArts] = useState([]);
  const fetchArts = () => {
    fetch(apiAddress)
      .then((res) => res.json())
      .then((data) => setArts(data));
  };
  useEffect(() => fetchArts(), []);
  useEffect(()=> console.log(arts),[arts])



  return (
    <div className="artworks">
            {arts != 0 ? (
            arts.records             
            .map((art, index) => (
                <Artwork key={index} artData={art} />
            ))
      ) : (
        <LoadingMask />
      )}
      

</div>
  )
}

export default Artworks