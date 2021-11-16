import classes from './Profile__postFeed.module.css'
import Profile__postFeed_post from "./Profile__postFeed_post/Profile__postFeed_post";

const Profile__postFeed = () => {
    return <div className={classes.main}>
        <textarea>Приколдесик</textarea>
        <br/>
        <button>Post</button>
        <br/>
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
        <Profile__postFeed_post author='You' likes_amount='321' post_id='1' text="Тестируем пропсики"/>
        <Profile__postFeed_post likes_amount='922' post_id='2' text="Опять тестируем пропсики"/>
        <Profile__postFeed_post likes_amount='422' post_id='3' text="Оп, пропсики"/>
    </div>
}

export default Profile__postFeed