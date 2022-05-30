import styles from './search_header.module.css'
import React, { useRef } from 'react';

const refresh = () => {
    console.log('새로고침 시작')
    window.location.reload();
}

// 엔터든 돋보기 클릭이든 서치가 실행되면 onSearch 라는 콜백함수를 불러.
const SearchHeader = ({ onSearch, onSearch2 }) => {
    // 검색 인풋 필드 안에 값을 inputRef로 useRef를 이용하여 받아놓고.
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value + '핸들 서치 실행됩니다.');
        onSearch(value);
        console.log(value + '온 서치 실행했어요~~');
    }
    // 검색 아이콘 클릭
    const onClick2 = () => {
        console.log('온클릭 실행됩니다.');
        handleSearch();
    };
    // 검색 필드에서 엔터
    const onKeyPress = (event) => {
        console.log('온키프레스 실행됩니다.');
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    // 두번째 검색 아이콘 클릭하여 무비 검색
    const onClick_movie_button = () => {
        console.log('온클릭 무비 버튼 실행됩니다.');
        const value = inputRef.current.value;
        onSearch2(value);
        console.log(value + '무비 온 서치 실행했어요~~');
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={refresh}>
                <img className={styles.img} src='./images/logo.png' alt='유튜브 아이콘'></img>
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input className={styles.input} type='search' placeholder='Search...' onKeyPress={onKeyPress} ref={inputRef}></input>
            {/* ref 선언 */}
            <button className={styles.button} type='submit' onClick={onClick2}>
                <img className={styles.buttonImage} src='./images/search.png' alt='확인 버튼 이미지'></img>
            </button>
            <button className={styles.button_movie} type='submit' onClick={onClick_movie_button}>
                <img className={styles.buttonImage_movie} src='./images/search.png' alt='확인 버튼 이미지'></img>
            </button>
        </header>
    );
}

export default SearchHeader;