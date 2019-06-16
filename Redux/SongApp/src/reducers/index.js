import { combineReducers } from 'redux';

//Reducers
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '2:30' },
        { title: 'Get Down', duration: '4:00' },
        { title: 'Right Now', duration: '1:45' },
        { title: 'Wild Hunt', duration: '3:10' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    //else return pervious state
    return selectedSong;
}

//combining our reducers to state
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
