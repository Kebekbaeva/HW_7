import React, {useEffect, useState} from 'react';

function HeaderPage(props) {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    const aboutPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }

    return (
        <div>
            <ul>
                {posts.slice(1, 10).map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}

export default HeaderPage;