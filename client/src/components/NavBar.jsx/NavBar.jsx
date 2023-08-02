import Searchbar from "../SearchBar/SearchBar";

import { NavLink, useLocation } from "react-router-dom";

const NavBar = ()=>{

    const location = useLocation();
  

    return(
        <div>
            <NavLink to='/home'>Home</NavLink>
            
            {location.pathname === '/home' && <Searchbar/>}
        </div>
    )
}
export default NavBar