import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {CustomLink} from "../components/CustomLink";

type PostType = {
    userId: number
    id: number
    title: string
    body: string
}

type InitType = PostType | null

export const SinglePage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState<InitType>(null)

    const goBack = () => {
        navigate(-1)
    }

    const goHome = () => {
        navigate('/', {replace: true})
    }

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
            <button><Link to={'/'}>Home</Link></button>

            <button onClick={goBack}>Back</button>
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
