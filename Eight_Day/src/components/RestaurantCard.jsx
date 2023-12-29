import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData}) =>{
    const {cloudinaryImageId,name,avgRating,costForTwo,cuisines} = resData;
    return (
        <div className="restaurant-card">
            <img 
                className="restaurant-logo" 
                alt="Leon foods" 
                src={
                    CDN_URL+
                    resData.cloudinaryImageId
                } 
            />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(",")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;