import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
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

    componentDidMount(){
        this.getSinglePost()
    }

    getSinglePost = () =>{
        axios.get(`/api/post/${this.props.match.params.post_id}`)
        .then(res => {
            const {title, img, content, author_id, profile_pic} = res.data[0]
            this.setState({title, img, content, author_id, profile_pic})
        })
    }

    render(){

        
        return(
        <div className='current-post-main'>
            <div className='current-post-container'>
                <div className='post-nav'>
                <span id='current-post-title'>{this.state.title}</span>
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

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Post);