import styles from './search_header.module.css'
import React from 'react';

const SearchHeader = (props) => {
    const onClick = () => {
        console.log('온클릭 잘되니?');
    };

    const onKeyPress = () => {
        console.log('온키프레스 잘되니?');
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src='./images/logo.png' alt='유튜브 아이콘'></img>
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input className={styles.input} type='search' placeholder='Search...' onKeyPress={onKeyPress}></input>
            <button className={styles.button} type='submit' onClick={onClick}>
                <img className={styles.buttonImage} src='./images/search.png' alt='확인 버튼 이미지'></img>
            </button>
        </header>
    );
}
    
export default SearchHeader;