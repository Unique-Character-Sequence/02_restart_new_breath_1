import c from './Communities.module.css'
import CommunityTile from "./CommunityTile/CommunityTile";

const Communities = (props) => {
    let doneCommunities = props.CommunitiesPageDatasets.rawCommunitiesListDatasets.map (obj => <CommunityTile {...obj}/>);

    return <div className={c.main}>
        {doneCommunities}
    </div>
}

export default Communities