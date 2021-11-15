import classes from './Sidebar.module.css'

const Sidebar = () => {
    return <div className={classes.main}>
        <nav>
            <div><a href="#s">Profile</a></div>
            <div><a href="#s">Messages</a></div>
            <div><a href="#s">Settings</a></div>
        </nav>
    </div>
}

export default Sidebar;