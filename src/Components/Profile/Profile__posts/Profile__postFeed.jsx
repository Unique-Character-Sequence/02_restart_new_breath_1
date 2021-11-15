import classes from './Profile__postFeed.module.css'
import Profile__postFeed_post from "./Profile__postFeed_post/Profile__postFeed_post";

let Profile__postFeed = () => {
    return <div className={classes.main}>
        Мои посты
        <div>Пост1
            <ul>
                <li>Итак, братан</li>
                <li>Поздравляю тебя с новым началом</li>
                <li>Ты быстренько восстановишься, да!</li>
                <li>А потом и прогресс продолжишь</li>
                <li>После этого и деньжат заработаешь</li>
                <li>Боже! ;') я даже завидую тебе...</li>
            </ul>
        </div>
        <Profile__postFeed_post/>
    </div>
}

export default Profile__postFeed