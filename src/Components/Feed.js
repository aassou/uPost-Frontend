import React, { useEffect, useState } from "react";
import Post from "./Post";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import _ from 'lodash';
import axiosInstance from "../axios";
import Pusher from 'pusher-js';
import './Feed.css'

const pusher = new Pusher('ffca908f44668a3102f5', {
    cluster: 'us3'
  });

const Feed = () => {
    // const [profilePic, setProfilePic] = useState('');
    const [postsData, setPostsData] = useState('');

    const syncFeed = () => {
        axiosInstance.get('/api/posts')
            .then((res) => {
                setPostsData(res.data);
            });
    };

    useEffect(() => {
        syncFeed();
    }, []);

    useEffect(() => {
        const channel = pusher.subscribe('posts');

        channel.bind('inserted', function(data) {
            syncFeed();
        });
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {
                _.map(postsData, ({ avatar, text, timestamp, imgName, user }, index) => {
                    return (
                        <Post
                            key={index}
                            profilePic={avatar}
                            message={text}
                            timestamp={timestamp}
                            imgName={imgName}
                            username={user}
                        />
                    )
                })
            }
        </div>
    );
};

export default Feed;