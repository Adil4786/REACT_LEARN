import React from "react";
import { GITHUB_URL_ABOUT } from "../utils/constants";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"App User",
                location:"India",
                company:"Default",
                avatarURL:"https://avatars.githubusercontent.com/u/123352158?v=4"
            }
        }
        console.log(this.props.name+ " Child Constructor");

    }

    async componentDidMount(){

        this.timer = setInterval(()=>{
            console.log("React OP")
        },1000)
        console.log(this.props.name+ " Child Component Did Mount")
        // const data = await fetch(GITHUB_URL_ABOUT);
        // const json = await data.json();
        // this.setState({
        //     userInfo:json
        // })
    }

    componentDidUpdate(){
        console.log("componenetDidUpdate - On every subsequent render")
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("componentWillUnmount - Before the component is unmounted")
    }

    render(){
        console.log(this.props.name+ "Child render")
        const {name,location,company} = this.state.userInfo;
        return (
            <div className='user-card'>
                <h1>FOREVER LEARNER</h1>
                <img className ="profile-picture-git" src="https://avatars.githubusercontent.com/u/123352158?v=4" alt="Profile Pic" />
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h4>{company}</h4>
            </div>
        )
    }

}

export default UserClass;

