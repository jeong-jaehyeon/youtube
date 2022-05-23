import React from 'react';
import './video_item.css'

const VideoItem = (props) => <h1 className="video_title">{props.video.snippet.title}</h1>

export default VideoItem;