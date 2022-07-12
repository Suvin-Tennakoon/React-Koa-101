import React, {Component, useEffect, useState} from "react";
import Posts from "../components/Posts";
import {userContext} from "./userContext";

export default function Main() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            //response.json() will convert response body to json
            .then(DataPosts => {
                setPosts(DataPosts);
            })
    },[]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            //response.json() will convert response body to json
            .then(userRet => {
                setUser(userRet);
            })
    },[])

    return (
        <userContext.Provider value={user}>
            <Posts posts={posts}/>
        </userContext.Provider>

    );
}