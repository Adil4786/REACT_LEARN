import { useEffect,useState } from "react";
import { SWIGGY_RES_MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) =>{
    const [restaurantInfo,setRestaurantInfo] = useState(null);
    const [menuInfo,setMenuInfo] = useState(null);

    console.log("inside useRSM hook")

    useEffect(()=>{
        console.log("inside  useEFFect hook")
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
        console.log("inside fetchRSM function")
    }
    console.log("outside fetchRSM function");
    return {restaurantInfo,menuInfo};
}


export default useRestaurantMenu;