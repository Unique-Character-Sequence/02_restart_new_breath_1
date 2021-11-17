import {NavLink} from "react-router-dom";
import c from './Tile.module.css'

const Tile = (props) => {
    let path = `/messages/${props.id}`;
    return <div className={c.main}>
        <NavLink className={c.item} to={path}>{props.name}</NavLink>
    </div>
}


export default Tile