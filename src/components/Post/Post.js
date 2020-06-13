import React, {Component} from 'react'

class Post extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }

    render(){
        return(
            <div>Post.js</div>
        )
    }
}

export default Post