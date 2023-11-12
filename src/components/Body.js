import RestaurantCard from "./RestaurantCard";
//import restaurantsList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "./useRestaurants";
import useLiveStatus from "./useLiveStatus";


const Body = () => {
 
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const restaurants = useRestaurants();
  const onlineStatus = useLiveStatus();

  if(onlineStatus === false) return( <h1>Application is offline, Please ensure your internet connection</h1>);

  useEffect(() =>{
 
    setResListData();
    
  }, [restaurants]);
 
  const setResListData = async () => {
    setFilteredRestaurants(restaurants);
  }

    return ( restaurants.length === 0 ? <Shimmer /> : 
      <div className="body">
        <div className="filter">
             <div className="search">
              <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
              <button className="search-btn" onClick={()=> {
                    const filteredList =  restaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredRestaurants(filteredList)
                  } }
                    
                    >Search Btn</button>

             </div>
            <button className="filter-btn" 
               onClick={() =>{
                  const filteredRestaurants = restaurants.filter((restaurant) => restaurant.info.avgRating >4.3 );
                  setFilteredRestaurants(filteredRestaurants);
               }}
               >Top Rated restaurants </button>

             </div>
        <div className="res-container">
          

          {
               
              filteredRestaurants.map((restaurant) =>  
              <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}> 
               <RestaurantCard key={restaurant.info.id} resData = {restaurant.info} />
               </Link> 
              )
                
              
          }
         
          
        </div>
      </div>
    );
  };

  export default Body;