import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(){
    super()
    // console.log("Parent Constructor");
  }
  componentDidMount(){
    // console.log("Parent Component Did Mount")
  }
  render(){
    // console.log("Parent render")
    return (
      <div>
        <User name={"Adil(functional)"}/>
        {/* <UserClass name={"First"} location={"Dehardun(Class)"} /> */}
      </div>
    );
  }
};


// const About = () => {
//   return (
//     <div>
//       <User name={"Adil(functional)"}/>
//       <UserClass name={"Adil(Class)"} location={"Dehardun(Class)"} />
//     </div>
//   );
// };
export default About;
