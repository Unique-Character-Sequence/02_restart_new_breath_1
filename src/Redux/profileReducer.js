import {cloneDeep} from 'lodash';

let ADD_POST = 'ADD_POST'
let UPDATE_POST_INPUT = 'UPDATE_POST_INPUT'

let initialState = {
    rawPostDatasets: [
        {post_id: '1', author: 'Абобус Алексеич', likes_amount: '99', text: 'Флексанул конкретно'},
        {post_id: '2', author: 'Бибибус Чечевичкин', likes_amount: '299', text: 'Очень конкретно'},
        {post_id: '3', author: 'Бибибус Кукурача', likes_amount: '19', text: 'Жёстким флексом'},
    ],
    inputValue: 'Чё... Аааааа... Чё...'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = cloneDeep(state)
            let newPost = {
                post_id: '5',
                author: 'Жрумбус Крякус',
                likes_amount: '0',
                text: state.inputValue
            }
            stateCopy.rawPostDatasets.push(newPost)
            stateCopy.inputValue = ''
            return stateCopy
        }
        case UPDATE_POST_INPUT: {
            let stateCopy = cloneDeep(state)
            stateCopy.inputValue = action.postText;
            return stateCopy
        }
        default:
            return state
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

