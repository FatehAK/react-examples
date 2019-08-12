import React from 'react';

class VideoList extends React.Component {

    render() {
        let initialVideo = this.props.video.items[0].id.videoId;
        console.log(initialVideo);
        return (
            <div className="video-list">
                ({(initialVideo) && (<iframe src={'https://www.youtube.com/embed/' + initialVideo} width="560" height="315" title="video-item"></iframe>)}
            </div>
        );
    }
}

export default VideoList;
