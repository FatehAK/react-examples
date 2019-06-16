import jsonAPI from '../apis/jsonPlaceholder.js';

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        //block execution of next code until this completes
        await dispatch(fetchPosts());

        const userIdsWithDup = getState().posts.map((post) => {
            return post.userId;
        });
        //remove duplicates using Set
        const userIds = new Set(userIdsWithDup);
        Array.from(userIds).forEach((userId) => {
            dispatch(fetchUser(userId));
        });

    };
};

export const fetchPosts = () => {
    //return a function which in turn returns an action object later
    return async (dispatch) => {
        const response = await jsonAPI.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    };
};

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonAPI.get(`/users/${id}`);
        dispatch({ type: 'FETCH_USER', payload: response.data });
    };
};

//we can memoize to avoid repeated AJAX calls (or) use above technique in case you need to refetch updates later
//our memoize function
// function memoize(cb) {
//     let cache = {};
//     return function(...key) {
//         //if exist return
//         if (cache[key]) {
//             return cache[key];
//         }
//         //if not exist add to cache
//         else {
//             return (cache[key] = cb(...key));
//         }
//     };
// }

// export const fetchUser = (id) => {
//     return (dispatch) => {
//         _fetchUser(id, dispatch);
//     };
// }

// const _fetchUser = memoize(async (id, dispatch) => {
//     const response = await jsonAPI.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });
