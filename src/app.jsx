import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos_app, setVideos] = useState([]);

  //쿼리를 인자로 가져가서 그때마다 다른 검색어를 검색하게 해준다.
  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    console.log("앱단의 서치 시작합니다.")
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDj9syl9woEdyVzb71BH9tlNXztwa-4j7g`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id:item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

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
      <SearchHeader onSearch={search}></SearchHeader>
      <VideoList videos_list={videos_app}></VideoList>
    </div>
  );
  // 위의 로직을 거친 산출물인 videos_app을 VideoList 의 videos_list에 보냄.
}

export default App;
