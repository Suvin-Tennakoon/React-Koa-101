import React from "react";


export default function (props) {

    const posts = props.post;

    return (
            posts.map(post => (
                <tr key={post.id}>
                    {/*this key is required because react cannot differentiate rows*/}

                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            ))
    )
}