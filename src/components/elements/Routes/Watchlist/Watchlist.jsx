const Watchlist = () => {
   let favourites = [];
   favourites = localStorage.getItem('favourites');
   // favourites = JSON.parse(favourites);
   console.log(favourites);



    return ( 
      <div>
         {favourites.length > 0 ?
            <div>
               <h1>Your watchlist</h1> 
               
            </div>
         :
         <div>Add something to your watchlist</div>
         }
      </div>

     );
}
 
export default Watchlist;