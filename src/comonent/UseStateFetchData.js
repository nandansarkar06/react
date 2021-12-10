import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UseStateFetchData() {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        axios.
            get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(true)
                setPost({})
                setError('Something went wrong')
            })
    }, [])
    return (
        <div>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default UseStateFetchData
