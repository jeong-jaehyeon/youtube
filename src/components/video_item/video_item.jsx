import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video, video:{ snippet }, onClickVideo }) => (
    //온클릭에서 이벤트가 발생이 되면
    <li className={styles.container} onClick={() => onClickVideo(video)}>
        <div className={styles.video}>
            <img className={styles.thumbnail}
                src={snippet.thumbnails.medium.url} alt="동영상 썸네일">
                {/* {props.video.snippet.title} */}
            </img>
            <div className={styles.metadata}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
        </div>

    </li>
);
export default VideoItem;