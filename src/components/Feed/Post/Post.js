import React from 'react';
import './Post.css'
import { Avatar } from '@material-ui/core';

const Post = ({ profilePic, image, username, timestamp, message }) => {
    return (
        <div className="post">
            <div className="postTop">
                <Avatar src={profilePic} className="postAvatar" />

                <div className="postTopInfo">
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                    {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                </div>
            </div>

            <div className="postBottom">
                <p>{message}</p>
            </div>

            <div className="postImage">
                <img src={image} alt={username}/>
            </div>
        </div>
    )
}

export default Post;
