import {Navigate} from "react-router";

const withRedirectToLoginPage = (Component) => (props) => {
    // TODO: как работает синтаксис сверху? Я получаю Component,
    //  которая до меня приняла пропсы и замыканием получаю их... или чё...
    return props.isUserLogged ? <Component {...props} /> : <Navigate to='/login'/>
}

export default withRedirectToLoginPage