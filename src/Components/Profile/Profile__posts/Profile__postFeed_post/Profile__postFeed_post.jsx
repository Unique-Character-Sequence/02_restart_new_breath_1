import c from './Profile__postFeed_post.module.css'
import cutepfp from '../../../../cutepfp.jpg'
import heart from '../../../../heart.jpg'

let Profile__postFeed_post = (props) => {
    return <div className={c.main}>
        <div>
            {/*{`Пост ${props.post_id}`} // Просто напоминалка*/}
            Пост {props.post_id}
        </div>
        <div>
            <img className={c.post_pfp} src={cutepfp} alt=""/>
            {props.text}
        </div>
        <div className={c.like_indicator}>
            <img className={c.heart_pic} src={heart} alt=""/>
            {props.likes_amount}
        </div>
    </div>
}

export default Profile__postFeed_post