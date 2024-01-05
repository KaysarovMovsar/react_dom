import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";

export const HomePage = () => {
    const [posts, SetPosts] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => SetPosts(data))
    },[])
    return (
        <div className="flex">
            {
                posts.map((item) => {
                    return(
                        <div>
                            <Link to={`/posts/${item.id}`}>{item.title}</Link></div>
                    )
                })
            }
        </div>
    );
};

