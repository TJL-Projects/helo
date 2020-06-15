import React, {Component} from 'react'
import axios from 'axios'

import './Dashboard.css'

class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            posts: [],
            searchInput: '',
            userPosts: true
        }
    }

    componentDidMount(){
        this.getPosts()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleToggle = () => {
        const {userPosts} = this.state
        this.setState({
            userPosts: !userPosts
        })
        console.log(this.state)
    }

    getPosts = () => {
        const {searchInput, userPosts} = this.state

        axios.get(`/api/posts/?userPosts=${userPosts}&searchInput=${searchInput}`)
        .then(res => {
            this.setState({
                posts: res.data
            })
            console.log(res.data)
        })
    }

    render(){
        const mappedPosts = this.state.posts.map((element, index) => {
            return(
                <div key={index}>
                    <h1>{element.username}</h1>
                    <img className='post-img' src={element.img} alt={element.title} />
                </div>
            )
        })

        return(
            <div className='dash-component'>
                <div className='search-container'>
                    <input 
                        type='search' 
                        name='searchInput'
                        value={this.state.search}
                        placeholder='Search by title'
                        onChange={e => this.handleChange(e)}
                    />
                    <button className='search-btn'>Search</button>
                    <span>My Posts:</span>
                    <input
                        type='checkbox'
                        onChange={this.handleToggle}
                    />
                </div>
                {mappedPosts}
            </div>
        )
    }
}

export default Dashboard