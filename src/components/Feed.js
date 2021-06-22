import React, { useState, useEffect } from 'react';
import TwatBox from './TwatBox.js';
import './styles/Feed.css';
import Post from './Post.js';
import db from '../firebase'


function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className='feed'>    
        <div className='feed__header'>
            <h2>Twatter</h2>
        </div>

        <TwatBox />

        {posts.map(post => (
        <Post 
            avatar={post.avatar}
            displayName={post.displayName}
            image={post.image}
            text={post.text} 
            username={post.username} 
            verified={post.verified}
        />
        ))}
        </div>
    )
}

export default Feed