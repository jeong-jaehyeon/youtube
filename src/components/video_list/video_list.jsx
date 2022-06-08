import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';
{/* 프롭스로 전달된 비데오즈(video list)를 맵으로 빙글빙글 돌면서 video에 있는 아이템을 video 컴포넌트로 만든다.
    그리고 그것을 videoItem에 전달한다 */}

{/* 
    갑자기 여기 먼가 이해가 안감.
    비데오즈안의 프롭스를 비데오즈_리스트를 맵으로 돌린다고..? 
    -> 프롭스에서 넘겨받은 videos_list 를 맵으로 돌린다고~~! -> 근데 넘겨받은게애초에 비데오즈 리스트가 아닌가..? 프롭스에서 비데오즈리스트 온클릭비디오를
    나누는건 이해가 되는데 이렇게 두개로 나눠서 가져올 시에는 비디오즈 리스트로 한번 더 들어갈 필요가 없지않나..?
    -> 필요가 없는게 맞고 맞긴 맞는데 {} 이거를 해줘야 되거였네 
    */}

const VideoList = ({ videos_list, onClickVideo }) => (
    <ul className={styles.videos}>
        {videos_list.map(videoOfList => (
            <VideoItem key={videoOfList.id} video={videoOfList} onClickVideo={onClickVideo} />
        ))}
    </ul>
);




export default VideoList;