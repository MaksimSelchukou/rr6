import React, {FormEvent, useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

type PostType = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// type CustomHTMLCollection = {
//     name: HTMLInputElement;
//
// }

const BlogPage = () => {
    const [posts, setPosts] = useState<Array<PostType>>([])

    const [searchParams, setSearchParams] = useSearchParams()


    const postQuery = searchParams.get('post') || ''
    const latest = searchParams.has('latest')

    const startsFrom = latest ? 80 : 1



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => {
                setPosts(json)
            })
    }, [])
    return (
        <div>
            <h1>BlogPage</h1>
            <BlogFilter latest={latest} postQuery={postQuery} setSearchParams={setSearchParams}/>
            <Link to='/posts/new'>Create post</Link>
            <ul>
                {posts.filter((el) => el.title.includes(postQuery) && el.id >= startsFrom).map(post => {
                    return <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                })}
            </ul>
        </div>
    );
};

export default BlogPage;