import {Component} from "react";
import UserClass from "./UserClass";

class About extends Component{
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent ComponentDidMount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1> About page</h1>
        <UserClass
          name={"First"}
          location={"Gurgaon (class)"}
          contact={" naveenkaushik0612@gmail.com (class)"}
        />
      </div>
    );
  }
}
export default About;
