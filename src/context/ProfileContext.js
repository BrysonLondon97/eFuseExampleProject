import createDataContext from '../context/createDataContext';

const postReducer = (state, action) => {
    {/* Future Code */}
    return null
}

const newPost = (dispatch, state) => (content, date) => {
    {/*Future Code */}
    
}

export const {Context, Provider} = createDataContext(
    postReducer,
    {newPost},
    []
)