import c from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

let ternary = navData => navData.isActive ? c.active : c.item;

const Sidebar = () => {
    return <nav className={c.main}>
        <div>
            <NavLink className={ternary} to="/profile">Profile</NavLink>
        </div>
        <div>
            <NavLink className={ternary} to="/messages">Messages</NavLink>
        </div>
        <div>
            <NavLink className={ternary} to="/communities">Communities</NavLink>
        </div>
        <div>
            <NavLink className={ternary} to="/photos">Photos</NavLink>
        </div>
        <div>
            <NavLink className={ternary} to="/settings">Settings</NavLink>
        </div>
    </nav>
}

export default Sidebar;