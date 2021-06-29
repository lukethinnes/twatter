import React, {useEffect, useState} from 'react'
import './styles/TwatBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from './firebase'

function TwatBox() {
    const[twat, setTwat] = useState('');
    const[image, setImage] = useState('');

    const sendTwat = event => {
        event.preventDefault();
        db.collection('post').add({
            displayName: 'Hard Thomas',
            username: 'hardthomas',
            verified: true,
            text: twat,
        })
    }

    return (
        <div className='twatBox'>
            <form>
                <div className='twatBox__input'>
                    <Avatar src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FvEJns8TcNKA%2Fmaxresdefault.jpg&f=1&nofb=1'></Avatar>
                <input 
                    onChange={event => setTwat(event.target.value)} 
                    value={twat} 
                    type='text'
                />
                </div>
                <input
                    value={image}
                    onChange={event => setImage(event.target.value)}
                    className='twatBox__imageInput'
                    placeholder='Optional: Enter image URL'
                    type='text'
                />
                <Button className='twatBox__twatButton'>Twat</Button>
            </form>
        </div>
    )
}

export default TwatBox
