import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import ReactPlayer from "react-player";
import YouTube from '@u-wave/react-youtube'


const VideoPlayer = (props) => {

  return props.type=='vedio' ?  
          <YouTube 
            key={Math.random()} 
            video={props.url} 
            showCaptions={true}
            autoplay={false}
            controls={true}
            id="player"
            
          /> : 
         <Player 
            key={Math.random()} 
            src={props.url}>
         </Player>
};
export default VideoPlayer;
