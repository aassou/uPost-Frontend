import React, { useState } from 'react';
import { Avatar, Input } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';
import db from '../firebase';
import axios from 'axios';
import axiosInstance from '../axios';
import FormData from 'form-data';
import './MessageSender.css';

const  MessageSender = () => {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [image, setImage] = useState(null);
    const [{ user }, dispatch] = useStateValue();

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            console.log(image);
            console.log(e.target.files[0]);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageResponse = null;
        let imageName = null;
        
        if (image) {
            const imgForm = new FormData();
            imgForm.append('file', image, image.name);

            imageResponse = await axiosInstance.post('/api/images', imgForm, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`
                }
            });

            imageName = imageResponse.data.filename;
        }
        console.log(imageName);
        const postData = {
            text: input,
            imgName: imageName,
            user: user.displayName,
            avatar: user.photoUrl,
            timestamp: Date.now()
        };

        console.log(postData);
        savePost(postData);

        setImageUrl('');
        setInput('');
        setImage(null);
    }

    const savePost = async (postData) => {
        await axiosInstance.post('/api/posts', postData)
            .then((resp) => {
                console.log(resp);
            });
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoUrl} />
                <form>
                    <input 
                        type="text" 
                        className='messageSender__input' 
                        placeholder="What's on your mind?" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                    />
                    <Input 
                        type="file" 
                        className='messageSender__fileSelector' 
                        onChange={handleChange} 
                    />
                    <button onClick={handleSubmit} type='submit' >Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;