import {useParams} from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () =>{
    console.log("Restaurant Menu")
    const {resId} = useParams();
    const {restaurantInfo,menuInfo} = useRestaurantMenu(resId);
    if(!restaurantInfo) return <Shimmer />
    const {itemCards} = menuInfo[1].card.card;
    return (
        <div>
            <h1>{restaurantInfo?.name}</h1>
            <p>{restaurantInfo?.cuisines.join(",")} - {restaurantInfo?.costForTwoMessage}</p>
            <ul>
            {
                itemCards.map((item)=>(
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {" Rs "}
                            {item.card.info.price/100||item.card.info.price/100}
                        </li>
                ))
            }
            </ul>
        </div>
    )
}

export default RestaurantMenu;