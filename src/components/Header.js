// import logo from "../../Image/logo.png";
import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  return (
    //responsive tailwind --->  sm:bg-yellow-50  
    <div className="flex justify-between bg-pink-50 shadow-lg sticky top-0 overflow-hidden z-50">
      <div className="logo-container">
        <img className="w-[130px]" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex justify-center m-4 p-4 gap-2 font-light-bold text-lg">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 hover:text-orange-500"><Link to="/">Home</Link></li>
          <li className="px-4 hover:text-orange-500"><Link to="/about">About Us</Link></li>
          <li className="px-4 hover:text-orange-500"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 hover:text-orange-500"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 hover:text-orange-500"><Link to="/cart">Cart</Link></li>
          <button className="login hover:text-orange-500" onClick={()=>{
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
          }}>{btnNameReact}</button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
