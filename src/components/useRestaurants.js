import {useState, useEffect} from 'react'
import { RESTAURANTS_LIST_URL } from "../utils/constants";

const useRestaurants = () => {

    const [restaurants, setRestaurants] = useState([]);
   

    useEffect(() =>{
        fetchData();
      },  [])
    
      const fetchData =async () => {
         const fetchedData = await fetch(RESTAURANTS_LIST_URL);
         const jsonData =await fetchedData.json();
         setRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         console.log(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
        }
        //console.log(restaurants)
  return restaurants;
  
}

export default useRestaurants