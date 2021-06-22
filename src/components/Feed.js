import React, { useState, useEffect } from 'react';
import TwatBox from './TwatBox.js';
import './styles/Feed.css';
import Post from './Post.js';
import db from '../firebase'


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className='feed'>    
        <div className='feed__header'>
            <h2>Twatter</h2>
        </div>

        <TwatBox />

            {posts.map((post) => (
            <Post
                key={post.text}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
            />
        ))}
        </div>
    )
}

export default Feed