import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer"; 
import { Link } from "react-router-dom";

const Body =()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurants,setFilteredRestaurants]=useState([])

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        const resultData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(resultData);
        setFilteredRestaurants(resultData);
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search Restaurants"
                        value={searchText}
                        onChange={(e)=>{
                            setSearchText(e.target.value)
                        }}
                        ></input>
                    <button 
                        className="search-btn"
                        onClick={()=>{
                            const filteredRestaurants=  listOfRestaurants.filter(
                                (restaurant)=>restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filteredRestaurants)
                        }}
                    >Search</button>
                </div>
                <button 
                    className="filter-btn"
                    onClick={()=>{
                        const filteredRestaurants = restaurantList.filter((restaurant)=>{
                            return restaurant.info.avgRating > 4
                        })
                        setListOfRestaurants(filteredRestaurants)
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurants.map((restaurant)=>(
                    <Link key={restaurant?.info?.id} to={`/restaurant/${restaurant?.info?.id}`} >
                        <RestaurantCard  resData={restaurant?.info}/>
                    </Link>
                    
                ))}                
            </div>
        </div>
    )
}

export default Body;