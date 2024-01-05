import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

export const SinglePost = () => {
    const {id} = useParams()
    const [post, SetPost] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => SetPost(data))
    },[id])
    return (
        <div className="flex">
            {post.title}
        </div>
    );
};

