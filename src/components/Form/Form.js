import React, {Component} from 'react'
import './Form.css'

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
                            <img className='new-post-img' src={this.state.imgInput} alt='no-img-avail' />
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
                    <button className='post-btn'>Post</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Form