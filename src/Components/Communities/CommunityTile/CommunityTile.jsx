import c from './CommunityTile.module.css'

const CommunityTile = (props) => {
    return <div className={c.main}>
        <div>
            Community Pic and Banner
        </div>
        <div>
            <a href="Linkfromprops">{props.name}</a>
        </div>
        <div>
            {props.subs_amount} subscribers
        </div>
        <div>
            <button>{props.isUserSubbed ? 'Leave' : 'Join'}</button>
        </div>
    </div>
}

export default CommunityTile