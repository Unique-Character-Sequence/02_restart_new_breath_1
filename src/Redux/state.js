let rerender = () => {
}

let ADD_POST = 'ADD_POST'
let UPDATE_POST_INPUT = 'UPDATE_POST_INPUT'
let ADD_MSG = 'ADD_MSG'
let UPDATE_MSG_INPUT = 'UPDATE_MSG_INPUT'

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
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    post_id: '5',
                    author: 'Жрумбус Крякус',
                    likes_amount: '0',
                    text: this._state.ProfilePageDatasets.inputValue
                }
                this._state.ProfilePageDatasets.rawPostDatasets.push(newPost)
                this._state.ProfilePageDatasets.inputValue = ''
                this.rerender(this._state)
                break
            case UPDATE_POST_INPUT:
                this._state.ProfilePageDatasets.inputValue = action.postText;
                this.rerender(this._state)
                break
            case ADD_MSG:
                let newMsg = {
                    myMsg: true,
                    text: this._state.MessagesPageDatasets.inputValue
                }
                this._state.MessagesPageDatasets.rawMsgContentDatasets.push(newMsg)
                this._state.MessagesPageDatasets.inputValue = ''
                this.rerender(this._state)
                break
            case UPDATE_MSG_INPUT:
                this._state.MessagesPageDatasets.inputValue = action.msgText;
                this.rerender(this._state)
                break
        }
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    }
}
export const updatePostInputAC = (postText) => {
    return {
        type: UPDATE_POST_INPUT,
        postText: postText
    }
}
export const addMsgAC = () => {
    return {
        type: ADD_MSG
    }
}
export const updateMsgInputAC = (msgText) => {
    return {
        type: UPDATE_MSG_INPUT,
        msgText: msgText
    }
}

window.state = store.getState()
export default store