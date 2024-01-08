import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

export const Posts = () => {
    const navigate = useNavigate()


    const [posts, SetPosts] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => SetPosts(data))
    },[])

    const MoveForward = () => {
        navigate(1)
    }
    return (
        <div className="flex">
            <button onClick={MoveForward}>Вперед</button>
            <ol>
                {
                    posts.map((item) => {
                        return(
                            <li>
                                <Link key={item.id} to={`/posts/${item.id}`}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    );
};

