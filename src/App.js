import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import "tw-elements";

function App() {
    const [posts, setPosts] = useState(
        JSON.parse(localStorage.getItem("posts")) || []
    );

    const getPosts = async () => {
        let url = await fetch("http://jsonplaceholder.typicode.com/posts");
        let data = await url.json();

        if (localStorage.getItem("posts")) {
            setPosts(JSON.parse(localStorage.getItem("posts")));
        } else {
            setPosts(data);
            localStorage.setItem("posts", JSON.stringify(data));
        }
        return data;
    };
    const deletePost = (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            let posts = JSON.parse(localStorage.getItem("posts"));
            posts = posts.filter((post) => post.id != id);
            localStorage.setItem("posts", JSON.stringify(posts));
            getPosts();
        }
    };
    const editPost = (updatedPost) => {
        // alert(JSON.stringify(updatedPost));
        let posts = JSON.parse(localStorage.getItem("posts"));
        posts.map((post) => {
            if (post.id == updatedPost.id) {
                return (
                    (post.title = updatedPost.title),
                    (post.body = updatedPost.body)
                );
            }
        });
        localStorage.setItem("posts", JSON.stringify(posts));
        getPosts();
    };

    let showPosts = JSON.parse(localStorage.getItem("posts")).map((post) => (
        <Post
            key={post.id}
            data={post}
            deletePost={deletePost}
            editPost={editPost}
        />
    ));

    useEffect(() => {
        getPosts();
    }, []);
    return (
        <div className="grid grid-cols-1 bg-white sm:grid-cols-1 gap-5 m-5 md:grid-cols-2">
            {showPosts}
        </div>
    );
}

export default App;
