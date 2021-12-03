import logo from "../../logo.svg";
import c from './Header.module.css'
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

    let authLink = 'https://social-network.samuraijs.com/login'

    return (
        <div className={c.main}>
            <div className={c.logo_wrapper}>
                <img className={c.logo} src={logo} alt=""/>
            </div>
            <div className={c.loginButton}>
                <a target="_blank" href={authLink}>{availableNickname()}</a>
            </div>
        </div>
    )
}

export default Header