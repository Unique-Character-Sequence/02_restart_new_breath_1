import logo from "../../logo.svg";
import classes from './Header.module.css'
import {useEffect} from "react";

let Header = (props) => {
    useEffect(() => {
        props.getCredentials()
    }, [])
    console.log('Header props:', props);
    let availableNickname = () => {
        if (props.userCredentials && props.userCredentials.login) {
            return props.userCredentials.login
        } else return 'Not Authorized'
    }

    return (
        <div className={classes.main}>
            <div className={classes.loginButton}>
                <a href="#s">{availableNickname()}</a>
            </div>
            <img className="App-logo" src={logo} alt=""/>
        </div>
    )
}

export default Header