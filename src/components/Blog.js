import React, { Component } from 'react'
import './card.css'
import {BlogData} from '../Name'

class Blog extends Component {

    constructor(props){
        super(props);
        this.state ={
            posts : [],
            isLoaded: false
        }
    }

  componentDidMount() {
    const apiUrl = `https://dev.to/api/articles?username=${BlogData.devto_username}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
          this.setState({posts : data,
          isLoaded :true
        })
    });  
  }
  
    render() {
        var { isLoaded, posts } = this.state
        // console.log(projects)
        const projectlist = posts.map(
            post=> (
                <div className="card icon-box" key={post.id}>
                <img src={post.cover_image} alt="post" />
                <h3 className="black">{post.title}</h3>
                <p className="black">{post.description}</p>
                <div className="icons">
                <a target="blank" href={post.url}>Read More ....</a>
                </div>
                </div>

            )
            )
        if(!isLoaded){
            return <h2>Blog Post is Loading........</h2>
        }
        else{
            return (
                <div>
                    <h1>My Blog</h1>
                    <div className="project">{projectlist}</div>
                </div>
            )
        }
    }
}
export default Blog;