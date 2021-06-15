import React from 'react';
import './styles/Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets_input'>
                <SearchIcon className='widgets_searchIcon' />
                <input placeholder='Search Twitter' type='text' />
            </div>
            <div className='widgets__widgetContainer'>
                <h2>What's happening...</h2>
                <TwitterTweetEmbed tweetId={1402925065616773123} />
                <TwitterTimelineEmbed
                    sourceType='profile'
                    screenName='amorousdefi'
                    options={{ height: 400 }}
                />
            </div>
        </div>
    )
}

export default Widgets
