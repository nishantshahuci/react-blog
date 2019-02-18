import jsonPlaceholder from '../apis/jsonPlaceholder';

// action creators

export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    }
}
