import React from 'react';
import { connect } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { fetchCoords, fetchVideos } from '../actions';
import VideoList from './VideoList';

class App extends React.Component {

    componentDidMount() {
        //our action creator
        this.props.fetchCoords();
    }

    renderMarkers = () => {
        let self = this;
        let arr = [];
        Object.entries(this.props.coords).forEach(function(entry, idx) {
            let [key, value] = entry;
            arr.push(<Marker key={idx} onClick={(evt) => self.onMarkerClick(evt)} position={{ lat: value.lat, lng: value.long }} />)
        });

        return arr;
    }

    onMarkerClick = (evt) => {
        let obj = {
            lat: Number(evt.position.lat),
            lng: Number(evt.position.lng)
        };
        this.props.fetchVideos(obj);
    };

    render() {
        const style = {
            width: '100%',
            height: '50vh'
        };
        return (
            <div className="app">
                <Map google={this.props.google} zoom={2} minZoom={1} style={style}>
                    {(this.props.coords) && this.renderMarkers()}
                </Map>
                ({this.props.videos && (
                    <VideoList video={this.props.videos} />
                )}
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        coords: state.coords,
        videos: state.videos
    };
};

export default connect(mapStatetoProps, { fetchCoords, fetchVideos })(GoogleApiWrapper({
    apiKey: ('AIzaSyDuqhcnldSASlaMVsvLvMc8DRewy0FzX4o')
})(App))
