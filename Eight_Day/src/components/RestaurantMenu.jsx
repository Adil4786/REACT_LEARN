import { useState,useEffect } from "react";
import { SWIGGY_RES_MENU_API_URL } from "../utils/constants";
import {useParams} from "react-router";
import Shimmer from "./Shimmer";
const RestaurantMenu = () =>{
    const [restaurantInfo,setRestaurantInfo] = useState(null);
    const [menuInfo,setMenuInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchRestaurantMenu();
    },[])

    const fetchRestaurantMenu = async ()=>{
        const data = await fetch(`${SWIGGY_RES_MENU_API_URL}=${resId}`);
        const json = await data.json();
        const resInfo = json?.data?.cards[0]?.card?.card?.info;
        setRestaurantInfo(resInfo);
        let menuData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        if(!menuData){
            menuData = json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        }
        const menu = menuData?.filter(card => card.card.card.itemCards !== undefined);
        setMenuInfo(menu);
    }
    
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