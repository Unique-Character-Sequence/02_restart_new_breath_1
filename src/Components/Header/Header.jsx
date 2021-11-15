import logo from "../../logo.svg";
import classes from './Header.module.css'

let Header = () => {
    return (
        <div className={classes.main}>
            <img className="App-logo" src={logo} alt=""/>
            Хихихаха
        </div>
    )
}

export default Header