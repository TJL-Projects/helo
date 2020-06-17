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
            author_id: 0,
            profile_pic: ''
        }
    }

    componentDidMount(){
        this.getSinglePost()
    }

    handleDelete = () => {
        axios.delete(`/api/post/${this.props.match.params.postid}`)
        .then(() => {
           this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }

    getSinglePost = () =>{
        axios.get(`/api/post/${this.props.match.params.postid}`)
        .then(res => {
            console.log(res.data)
            const {title, img, content, username, profile_pic, author_id} = res.data[0]

            this.setState({title, img, content, username, profile_pic, author_id})
        })
        console.log(this.props)
    }

    render(){

        
        return(
        <div className='current-post-main'>
            <div className='current-post-container'>
                <div className='post-nav'>
                <span id='current-post-title'>{this.state.title}</span>
                    <div>
                        <span id='post-username'>{this.state.username}</span>
                        <img className='post-img' src={this.state.profile_pic} alt={this.state.title} />
                    </div>
                </div>
                <div className='content-img-container'>
                    <div id='current-post-img-container'>
                        <img id='current-post-img' src={this.state.img} alt={this.state.title} />
                    </div>
                    <div id='current-post-content'>
                        {this.state.content}
                
                    </div>
                </div>
                {(this.props.users.user_id === +this.state.author_id)
                ?(
                    <button onClick={this.handleDelete}>Delete</button>

                )
                : null
                }
            </div>
        </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Post);