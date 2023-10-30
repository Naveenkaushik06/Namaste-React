import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
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
        <div>
          LoggedInUser:
          <UserContext.Consumer>{({loggedInUser}) => <h1 className="text-xl">{loggedInUser}</h1>}</UserContext.Consumer>
        </div>
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
