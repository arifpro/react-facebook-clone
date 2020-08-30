import React, { useState, useEffect } from 'react';
import './Feed.css';

// components
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

// image
import arif from '../../img/story/arif.jpg'
import postImage from '../../img/story/storyImage/web-development.jpg'

// database
import db from '../../firebase'

const Feed = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
        })
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            {
                posts.map(post => (
                    <Post 
                        key={post.data.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}
                    />
                ))
            }
            {/* <Post 
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
            /> */}
        </div>
    )
}

export default Feed;
