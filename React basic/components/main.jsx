import React, {Component} from "react";
import Posts from "../components/Posts";

export default class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            posts : []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            //response.json() will convert response body to json
            .then(DataPosts => {
                this.setState({posts:DataPosts});
            })
    }

    render() {
        return (
            <Posts posts={this.state.posts}/>
        );
    }
}