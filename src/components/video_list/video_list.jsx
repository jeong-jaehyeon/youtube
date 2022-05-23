import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => 
<ul>
    {/* 프롭스로 전달된 비데오즈(video list)를 맵으로 빙글빙글 돌면서 video에 있는 아이템을 video 컴포넌트로 만든다.
    그리고 그것을 videoItem에 전달한다 */}
    {props.videos_list.map(videoOfList => (
        <VideoItem key={videoOfList.id} video={videoOfList}/>
    ))}
</ul>

export default VideoList;