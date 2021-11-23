let ADD_POST = 'ADD_POST'
let UPDATE_POST_INPUT = 'UPDATE_POST_INPUT'

// state is not global one, this is just the part this particular reducer needs
export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                post_id: '5',
                author: 'Жрумбус Крякус',
                likes_amount: '0',
                text: state.inputValue
            }
            state.rawPostDatasets.push(newPost)
            state.inputValue = ''
            break
        case UPDATE_POST_INPUT:
            state.inputValue = action.postText;
            break
    }
    return state
}