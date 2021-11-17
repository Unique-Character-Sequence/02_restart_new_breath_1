import ProfilePost from "./ProfilePost/ProfilePost";

let PostDatasets = [
    {post_id:'1', author:'Абобус Алексеич', likes_amount:'99', text:'Флексанул конкретно'},
    {post_id:'2', author:'Бибибус Чечевичкин', likes_amount:'299', text:'Очень конкретно'},
    {post_id:'3', author:'Бибибус Кукурача', likes_amount:'19', text:'Жёстким флексом'},
]

const ProfilePostFeed = () => {
    return <div>
        <ProfilePost {...PostDatasets[0]}/>
        <ProfilePost {...PostDatasets[1]}/>
        <ProfilePost {...PostDatasets[2]}/>
    </div>
}

export default ProfilePostFeed;