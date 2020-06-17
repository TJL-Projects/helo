import React, {Component} from 'react'
import './Form.css'
import axios from 'axios'

class Form extends Component{
    constructor(){
        super()

        this.state = {
            titleInput: '',
            imgInput: '',
            contentInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    addPost = () => {
        const {titleInput, imgInput, contentInput} = this.state

        axios.post('/api/new', {title: titleInput, img: imgInput, content: contentInput})
            .then(() => {
                this.props.history.push('/dashboard')
            })
    }

    render(){
        return(
            <div className='new-post'>
                <div className='new-post-container'>
                    <span className='post-span'>New Post</span>
                    <div className='form-inputs'>
                        <div className='span-pairing'>
                            <span className='new-post-span'>Title: </span>
                            <input 
                                name='titleInput'
                                value={this.state.titleInput}
                                onChange={e => this.handleChange(e)}
                                className='form-input'
                                />
                        </div>
                        <div className='new-post-img-container'>
                            <img 
                            className='new-post-img' 
                            src={this.state.imgInput}
                            placeholder=''                            
                            alt='no-img' />
                        </div>
                        <div className='span-pairing'>
                            <span className='new-post-span'>Image URL: </span>
                            <input 
                                name='imgInput'
                                value={this.state.imgInput}
                                onChange={e => this.handleChange(e)}
                                className='form-input'
                            />
                        </div>
                        <div className='span-pairing'>
                            <span className='new-post-span'>Content: </span>
                            <textarea
                                name='contentInput'
                                value={this.state.contentInput}
                                onChange={e => this.handleChange(e)}
                                className='post-textarea'
                                />
                        </div>
                    <button 
                        className='post-btn'
                        onClick={this.addPost}
                    >Post</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Form