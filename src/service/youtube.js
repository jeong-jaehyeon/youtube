class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow',
        }
    }

    // 제일 인기있는 25개 동영상
    async mostPopular() {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return result_1.items; // 리절트의 아이템이 내가 원하는 유튜브 동영상 목록임으로 그것을 setVideos에 넣어서 videos_app에 넣음.
    }

    // 인자를 받아서 검색해주는
    search_youtube(query) {
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions
        )
            .then(response => response.json())
            .then(result =>
                result.items.map(item => ({ ...item, id: item.id.videoId }))
            );
    }

    // videoType --> movie 인 것만.
    search_youtbue_movie(query) {
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&videoType=movie&key=${this.key}`
            , this.getRequestOptions)
            .then(response => response.json())
            .then(result =>
                result.items.map(item => ({ ...item, id: item.id.videoId }))
            )
    }
}

export default Youtube;