import React from 'react';
import TwatBox from './TwatBox.js';
import './styles/Feed.css';
import Post from './Post.js';


function Feed() {
    return (
        <div className='feed'>    
        <div className='feed__header'>
            <h2>Twatter</h2>
        </div>

        <TwatBox />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        </div>
    )
}

export default Feed
