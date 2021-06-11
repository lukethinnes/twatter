import React from 'react';
import './styles/Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar
}) {
    
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar src=''></Avatar>
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            Hard Thomas{' '} 
                            <span>
                                <VerifiedUserIcon className='post__badge'></VerifiedUserIcon>
                            </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>Bad news I am lean mean and some real tuff stuff punk...</p>
                    </div>
                </div>
                <img 
                alt='hard_tom'
                src='https://live.staticflickr.com/3182/2797209187_d05b2fa97b_b.jpg' 
                />
            </div>
        </div>
    )
}

export default Post