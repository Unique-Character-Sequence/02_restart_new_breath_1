import classes from './Sidebar.module.css'

const Sidebar = () => {
    return <div className={classes.main}>
        <nav>
            <div><a href="/profile">Profile</a></div>
            <div><a href="/messages">Messages</a></div>
            <div><a href="/settings">Settings</a></div>
        </nav>
    </div>
}

export default Sidebar;