import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "https//dummyurl.com",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child ComponentDidMount");
    // API Call here
    const data = await fetch("https://api.github.com/users/Naveenkaushik06");
    const json = await data.json();
    // console.log(json);

    // this.timer = setInterval(()=>{
    //   console.log("namaste react");
    // },1000);

    this.setState({
      userInfo: json,
    });

  }
  componentDidUpdate() {
    // console.log("ComponentdidUpdate");
  }
  componentWillUnmount(){
    // console.log("componentWillUnmount");
    clearInterval(this.timer)
  }
  render() {
    // console.log(this.props.name + "Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}
export default UserClass;
