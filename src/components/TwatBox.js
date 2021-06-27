import React, {useEffect, useState} from 'react'
import './styles/TwatBox.css'
import { Avatar, Button } from '@material-ui/core'

function TwatBox() {
    const[twat, setTwat] = useState('');
    return (
        <div className='twatBox'>
            <form>
                <div className='twatBox__input'>
                    <Avatar src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FvEJns8TcNKA%2Fmaxresdefault.jpg&f=1&nofb=1'></Avatar>
                <input value={twat} type='text'></input>
                {/* <input placeholder="Enter image URL..." type='text'></input> */}
                </div>
                <Button className='twatBox__twatButton'>Twat</Button>
            </form>
        </div>
    )
}

export default TwatBox
