import React from 'react';
import './Feed.css';

// components
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

// image
import arif from '../../img/story/arif.jpg'
import postImage from '../../img/story/storyImage/web-development.jpg'

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {/* <Post 
                key={id}
                profilePic={profilePic}
                message={message}
                timestamp={timestamp}
                username={username}
                image={image}
            /> */}
            <Post 
                key='1'
                profilePic={arif}
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='devarif'
                image={postImage}
            />
            <Post 
                key='2'
                profilePic={arif}
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='devarif'
            />
            <Post />
        </div>
    )
}

export default Feed;
