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
        <Post 
            avatar='https://live.staticflickr.com/3182/2797209187_d05b2fa97b_b.jpg' image='https://live.staticflickr.com/3182/2797209187_d05b2fa97b_b.jpg'
            displayName='Hard Thomas' 
            text='Yall cowards I swear' 
            username='slammericon' 
            verified 
        />
        </div>
    )
}

export default Feed
