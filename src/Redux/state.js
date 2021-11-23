import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";

let rerender = () => {
}

let store = {
    _state: {
        MessagesPageDatasets: {
            rawUserTileDatasets: [
                {id: 1, name: 'Бибус Челикович'},
                {id: 2, name: 'Абобус Беброчевских'},
                {id: 3, name: 'Бибабоба Кринжов'},
                {id: 4, name: 'Бублик Бибубликовый'},
            ],
            rawMsgContentDatasets: [
                {text: 'Привет, буброчелик!', myMsg: true},
                {text: 'Привеееееет, шо ты, как ты, чё дышишь', myMsg: false},
                {text: 'Да вот, взгрустнул чё-т немного, но, знай, мы не одни', myMsg: true},
                {text: 'Сообщенивание 4', myMsg: false},
            ],
            inputValue: 'Ааааа!'
        },
        ProfilePageDatasets: {
            rawPostDatasets: [
                {post_id: '1', author: 'Абобус Алексеич', likes_amount: '99', text: 'Флексанул конкретно'},
                {post_id: '2', author: 'Бибибус Чечевичкин', likes_amount: '299', text: 'Очень конкретно'},
                {post_id: '3', author: 'Бибибус Кукурача', likes_amount: '19', text: 'Жёстким флексом'},
            ],
            inputValue: 'Чё... Аааааа... Чё...'
        },
        SidebarDatasets: {
            rawActiveFriendsDatasets: [
                {id: '222', name: 'Алексей Суслик'},
                {id: '242', name: 'Валерий Жмурик'},
                {id: '222', name: 'Василий Крысик'},
                {id: '121', name: 'Артурий Саловик'},
            ]
        },
        CommunitiesPageDatasets: {
            rawCommunitiesListDatasets: [
                {id: '222', name: 'Жухликовое Сообщество', subs_amount: '1553', isUserSubbed: true},
                {id: '242', name: 'На рофлах', subs_amount: '5533', isUserSubbed: false},
                {id: '222', name: 'Данк Мимз', subs_amount: '2223', isUserSubbed: true},
                {id: '121', name: 'Гемшим Инфаркт', subs_amount: '553', isUserSubbed: false},
            ]
        }
    },
    getState() {
        return this._state
    },
    rerender() {
    },
    subscribe(observer) {
        this.rerender = observer;
    },
    dispatch(action) {
        // из-за того, что мы не копируем стейт, то мы можем манипулировать
        // им напрямую из редьюсеров
        // Вообще-то мы должны работать с результатор работы редьюсера.
        this._state.ProfilePageDatasets = profileReducer(this._state.ProfilePageDatasets, action)
        messagesReducer(this._state.MessagesPageDatasets, action)
        this.rerender(this._state)
        console.log(this._state);
    }
}


window.state = store.getState()
export default store