import YouTube from 'react-youtube';

const VideoPlayer = () => {

    const url = 'https://www.youtube.com/watch?v=DhlAvMSFi6Q&ab_channel=RobertRosenfeld';
    const videoId = new URL(url).searchParams.get('v');
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <div>
            <YouTube videoId={videoId} opts={opts} />
        </div>
    );
};

export default VideoPlayer;
