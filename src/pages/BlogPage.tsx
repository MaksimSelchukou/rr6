import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

type PostType = {
    id: number,
    title: string,
    body: string,
    userId: number
}

const BlogPage = () => {
    const [posts, setPosts] = useState<Array<PostType>>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => {
                setPosts(json)
                // console.log(json)
            })
    }, [])
    // console.log(posts, 'ogok')
    return (
        <div>
            <h1>BlogPage</h1>
            <Link to='/posts/new'>Create post</Link>
            <ul>
            {posts.map(post => {
                return <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            })}
            </ul>
        </div>
    );
};

export default BlogPage;