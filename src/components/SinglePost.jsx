import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

export const SinglePost = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [post, SetPost] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => SetPost(data))
    },[id])

    const MoveBack = () => {
        navigate(-1)
    }
    return (
        <div className="flex">
            <button onClick={MoveBack}>Назад</button>
            <div>{post.title}</div>
        </div>
    );
};

