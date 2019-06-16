import React from 'react';
import { connect } from 'react-redux';

//the component will rerender eveytime the state changes due to button click (calling action creator) in the SongList component
const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>;
    }
    return (
        <div className="song-detail">
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    };
};

export default connect(mapStateToProps)(SongDetail);
