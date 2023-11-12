import { CDN_URL } from "../utils/constants";
const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  
const RestaurantCard = (props) => {
const {name, cloudinaryImageId, avgRating, costForTwo, cuisines, sla} = props.resData;

      // console.log('Name:'+name)
    return (
      <div className="res-card" style={styleCard}>
     
        <img
          className="res-card-logo"
          alt="res-Image"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h5>{cuisines.join(', ')}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
      
      </div>
    );
  };

  export default RestaurantCard;