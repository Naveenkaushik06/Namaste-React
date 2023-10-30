import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"Defaul User",
})
export default UserContext;