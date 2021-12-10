import axios from 'axios';
import React, { useState, useEffect } from 'react';

function FetchData() {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [buttonId, setButton] = useState(1);

    const handleClick = () => {
        setButton(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
            .then(res => {
                setPosts(res.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [buttonId])

    return (
        <div>
            <input val={id} onChange={e => { setId(e.target.value) }} />
            <button onClick={handleClick}>Get Post</button>
            {posts.title}
            {/* <ul>
                {posts.map(post => (<li key={post.id}>{post.title}</li>))}
            </ul> */}
        </div>
    )
}

export default FetchData;