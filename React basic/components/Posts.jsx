import React, {Component} from "react";
import Post from "./Post";
import {userContext} from "../hooks/userContext";

export default class Posts extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const posts = this.props.posts;

        return(
            <div>
                <userContext.Consumer>
                    {
                        user => (
                            <div>
                                User Name : {user.name}
                            </div>
                        )

                    }
                </userContext.Consumer>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    </thead>
                    <tbody>

                       <Post post={posts}/>

                    </tbody>
                </table>
            </div>
        )
    }
}