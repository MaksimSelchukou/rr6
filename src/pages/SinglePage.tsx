import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

type PostType = {
    userId: number
    id: number
    title: string
    body: string
}

type InitType = PostType | null

export const SinglePage = () => {
    const {id} = useParams()
    const [post, setPost] = useState<InitType>(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => {
                setPost(json)
                // console.log(json)
            })
    }, [id])


    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit Post</Link>
                </>
            )}
        </div>
    );
};
