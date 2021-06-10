import React from 'react'
import TwatBox from './TwatBox.js'
import './styles/Feed.css'


function Feed() {
    return (
        <div className='feed'>    
        <div classname='feed__header'>
            <h2>Home</h2>
        </div>

        <TwatBox />
        </div>
    )
}

export default Feed
