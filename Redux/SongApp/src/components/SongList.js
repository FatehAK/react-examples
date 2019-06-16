import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button onClick={() => this.props.selectSong(song)} className="ui button primary">Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

//get the state from redux store and mapping it to props for this component
//this function reruns everytime the store changes
const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
};

//configuring connect
//the connect function takes in the mapping function as first param
//for the second param we supply the action creator which later gets wrapped up into the redux's dispatch() function
//anytime the store changes due to dispatch() any component hooked up to connect() will rerender
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);
