import {Navigate} from "react-router";
import {connect} from "react-redux";
import React from "react"

let mapStateToProps = state => ({
    isUserLogged: state.AuthData.isUserLogged
})

export const withRedirectToLoginPage = (Component) => {
    // TODO: понять как работает эта функция
    class RedirectComponent extends React.Component {
        render() {
            return this.props.isUserLogged ? <Component {...this.props} /> : <Navigate to='/login'/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}

