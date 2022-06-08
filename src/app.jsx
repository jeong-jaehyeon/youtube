import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos_app, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 핸들링하는 콜백함수를 만들고 얘는 밑에서 온클릭비데오로 비디오를 클릭했을 때 호출할거임.
  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

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
    .search_movie_app(query)
    .then(videos_app => setVideos(videos_app));
  };

  useEffect(() => {
    youtube
    .mostPopular() //
    .then(videos_app => setVideos(videos_app));
  });

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search_app} onSearch2={search_movie_app}></SearchHeader>
      {
        // 셀렉티드 비디오가(선택된 비디오가) 있다면 
        // 비디오 디테일이라는 컴포넌트를 이용해서 비디오를 전달해줄거야.
        // 비디오 선택은 밑인 비디오 리스트에서 온클릭 비디오가 실행되면 선택됨.
        selectedVideo && <VideoDetail video={selectedVideo}></VideoDetail>
      }
      <VideoList videos_list={videos_app} onClickVideo={selectVideo}></VideoList>
    </div>
  );
  // 위의 로직을 거친 산출물인 videos_app을 VideoList 의 videos_list에 보냄.
}

export default App;
