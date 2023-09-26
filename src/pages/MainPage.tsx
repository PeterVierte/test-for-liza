import React from 'react';
import TitleBlock from "../components/TitleBlock/TitleBlock";
import SearchBlock from "../components/SearchBlock/SearchBlock";
import Posts from "../components/Posts/Posts";

const MainPage = () => {
    return (
        <div className='container'>
            <TitleBlock/>
            <SearchBlock/>
            <Posts/>
        </div>
    );
};

export default MainPage;