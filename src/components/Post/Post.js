import React, {Component} from 'react'
import './Post.css'

class Post extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            profile_pic: ''
        }
    }

    render(){

        return(
        <div className='current-post-main'>
            <div className='current-post-container'>
                <div className='post-nav'>
                <span id='current-post-title'>Title</span>
                    <div>
                        <span id='post-username'>username</span>
                        <span id='post-profile_pic'>profile_pic</span>
                    </div>
                </div>
                <div className='content-img-container'>
                    <div id='current-post-img-container'>
                        img
                    </div>
                    <div id='current-post-content'>
                        content sdfasdf asdfasdfasd dasdfasdf asdfasdfas asdfasdfa asdfasdfasd asdfasdfas adfasdfas asdfasdfa asdfasdfas asdfasdfa asdfasdf afasdfasdf asdfasd fafasdfasdf asdfa sa
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Post