import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos_app, setVideos] = useState([]);

  //쿼리를 인자로 가져가서 그때마다 다른 검색어를 검색하게 해준다.
  const search_app = (query) => {
    console.log("앱단의 서치 시작합니다.")
    youtube
    .search_youtube(query) //
    .then(videos_app => setVideos(videos_app));
  };

  //쿼리를 인자로 가져가서 쿼리에 맞는 영화를 검색해준다.
  const search_movie_app = (query) => {
    console.log("앱단의 무비 서치 시작합니다.")
    youtube
    .search_youtbue_movie(query)
    .then(videos_app => setVideos(videos_app));
  };

  useEffect(() => {
    youtube
    .mostPopular() //
    .then(videos_app => setVideos(videos_app));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search_app} onSearch2={search_movie_app}></SearchHeader>
      <VideoList videos_list={videos_app}></VideoList>
    </div>
  );
  // 위의 로직을 거친 산출물인 videos_app을 VideoList 의 videos_list에 보냄.
}

export default App;
