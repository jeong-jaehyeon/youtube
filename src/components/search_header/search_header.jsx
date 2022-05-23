import styles from './search_header.module.css'
import React, { useRef } from 'react';

const SearchHeader = (props) => {
    const inputRef = useRef();
    // 검색 인풋 필드 안에 값을 inputRef로 useRef를 이용하여 받아놓고.
    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value + '핸들 서치 실행됩니다.');
    }

    const onClick = () => {
        console.log('온클릭 실행됩니다.');
        handleSearch();
    };

    const onKeyPress = (event) => {
        console.log('온키프레스 실행됩니다.');
        if (event.key === 'Enter')  {
            handleSearch();
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src='./images/logo.png' alt='유튜브 아이콘'></img>
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input className={styles.input} type='search' placeholder='Search...' onKeyPress={onKeyPress} ref={inputRef}></input>
            {/* ref 선언 */}
            <button className={styles.button} type='submit' onClick={onClick}>
                <img className={styles.buttonImage} src='./images/search.png' alt='확인 버튼 이미지'></img>
            </button>
        </header>
    );
}
    
export default SearchHeader;