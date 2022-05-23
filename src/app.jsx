import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos_app, setVideos] = useState([]);

  useEffect(() => {
    console.log('비디오 api를 가져오기 위한 useEffect 실행');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDj9syl9woEdyVzb71BH9tlNXztwa-4j7g", requestOptions)
      .then(response => response.json()) // json 형식으로 콘솔에 출력
      .then(result => setVideos(result.items)) // 리절트의 아이템이 내가 원하는 유튜브 동영상 목록임으로 그것을 setVideos에 넣어서 videos_app에 넣음.
      .catch(error => console.log('error', error));
  }, []);

  console.log({ videos_app } + '나는 비데오즈앱이다!!')
  return (
    <div className={styles.app}>
      <SearchHeader></SearchHeader>
      <VideoList videos_list={videos_app}></VideoList>
    </div>
  );
  // 위의 로직을 거친 산출물인 videos_app을 VideoList 의 videos_list에 보냄.
}

export default App;
