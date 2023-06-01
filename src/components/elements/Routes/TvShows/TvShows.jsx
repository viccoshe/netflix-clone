import { useLoaderData } from "react-router-dom";

const TvShows = () => {
   const data = useLoaderData();
   console.log(data)
   
    return ( 
        <div>
           <h1>TvShows </h1>
        </div>
     );
}
 
export default TvShows;