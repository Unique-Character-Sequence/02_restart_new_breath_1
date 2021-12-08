import c from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
let NavLinkAdvanced = (props) => {
    const capitalize = s => s[0].toUpperCase() + s.slice(1);

    let text = capitalize(props.to.replace("/", ""))
    return <div>
        <NavLink className={navData => navData.isActive ? c.active : c.item}
                 to={props.to}>{text}
        </NavLink>
    </div>
}


// <NavLinkAdvanced to='/messages'/>
const Sidebar = (props) => {
    let doneSidebarDatasets = props.SidebarDatasets.rawActiveFriendsDatasets.map(
        obj => <div>{obj.name}</div>
    )

    return <nav className={c.main}>
        <NavLinkAdvanced to='/profile'/>
        <NavLinkAdvanced to='/messages'/>
        <NavLinkAdvanced to='/communities'/>
        <NavLinkAdvanced to='/photos'/>
        <NavLinkAdvanced to='/friends'/>
        <NavLinkAdvanced to='/settings'/>
        <div className={c.activeUsersPanel}>
            Активные пользователи:
            <br/>
            __________________
            <div>
                {doneSidebarDatasets}
            </div>
        </div>
    </nav>
}

export default Sidebar;