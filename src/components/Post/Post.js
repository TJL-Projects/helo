import React, {Component} from 'react'

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
                <span>Title</span>
                    <div>
                        <span>username</span>
                        <span>profile_pic</span>
                    </div>
                </div>
                <div className='content-img-container'>
                    <div>
                        img
                    </div>
                    <div>
                        content
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Post