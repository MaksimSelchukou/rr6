import React from 'react';
import {useParams} from "react-router-dom";

export const EditPost = () => {
    const {id} = useParams()
    return (
        <h1>
            Edit post {id}
        </h1>
    );
};

