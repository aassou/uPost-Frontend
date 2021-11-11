import React from 'react';
import { Avatar } from '@material-ui/core';
import { 
    AccountCircle, 
    ChatBubbleOutline, 
    ExpandMoreOutlined, 
    NearMe, 
    ThumbUp 
} from '@material-ui/icons';
import './Post.css';

const Post = ({ profilePic, message, timestamp, imgName, username }) => {
    
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post___topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            {
                imgName ? (
                    <div className="post__image">
                        <img src={`${process.env.UPOST_API_URI}/api/images/${imgName}`} />
                    </div>
                ) : (
                    console.log('DEBUG >>> No image here')
                )
            }

            <div className="post__options">
                <div className="post__option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    );
};

export default Post;