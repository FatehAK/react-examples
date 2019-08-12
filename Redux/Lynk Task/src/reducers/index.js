import { combineReducers } from 'redux';

const coordsReducer = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_COORDS':
            return action.payload;
        default:
            return state;
    }
};

const videoReducer = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_VIDEOS':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    coords: coordsReducer,
    videos: videoReducer,
});
