import createDataContext from '../context/createDataContext';

const postReducer = (state, action) => {
    {/* Future Code */}
    return null
}

const newPost = (dispatch, state) => (content, date) => {
    
    state.push({content: content, date: date, userName: 'Bryson London', id: state.length + 1, title: 'Professional-Student' });
}

export const {Context, Provider} = createDataContext(
    postReducer,
    {newPost},
    []
)
//{...post, comments: [...comments, {content: action.payload.comment, likes: 0, date: action.payload.date}]}