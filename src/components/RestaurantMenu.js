import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { MENU_URL } from '../utils/constants';


const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [restaurantName, setRestaurantName] = useState("");
  const {resId} = useParams();
 
  useEffect( () =>{
      fetchData();
  }, []);

  const fetchData = async () =>{
    const fetchedData = await fetch(MENU_URL + resId);
    const json =await fetchedData.json();
    const resData = json?.data;
    setRestaurantName(resData.cards[0]?.card?.card?.info?.name)
    setRestaurantMenu(resData.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    console.log(resData.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
  }
  if(restaurantMenu === null){
    return(<Shimmer/>)
  }
 {/**
       * .data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
       */}

  return (
    <div className='menu'>
     
       <h1>{restaurantName}</h1>
        <h2>Menu: </h2>
        {
          restaurantMenu.map((item) => 
          <h6 key={item.card.info.id}>{item.card.info.name } | Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100
          }</h6> 
        )
        }
      
    </div>
  )
}

export default RestaurantMenu