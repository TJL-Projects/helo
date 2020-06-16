import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUser} from '../../ducks/userReducer'

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
        
        this.setState({
            userPosts: !this.state.userPosts
        })
        console.log(this.state)
    }

    handleSearch = () => {
        let ifTrue = false;
        if (this.state.userPosts === true){
           ifTrue = true;
        }
        axios.get(`/api/posts/?userPosts=${ifTrue}&&searchInput=${this.state.searchInput}`)
        .then(res => {
           this.setState({
              posts: res.data,
              searchInput: ''
              
           })
        })
    }

    getPosts = () => {
        const {searchInput, userPosts} = this.state

        axios.get(`/api/posts/?userPosts=${userPosts}&searchInput=${searchInput}`)
        .then(res => {
            this.setState({
                posts: res.data
            })
            // console.log(res.data)
        })
    }



    render(){
        const mappedPosts = this.state.posts.map((element, index) => {
            return(
                <div className='post-container' key={index}>
                    <h1 className='post-title'>{element.title}</h1>
                    <span className='post-author'>Posted by: {element.username}</span>
                    <img className='post-img' src={element.profile_pic} alt={element.title} />
                </div>
            )
        })

        return(
            <div className='dash-component'>
                <div className='search-container'>
                    <div className='search-input-container'>
                        <input 
                            className='search-input'
                            type='search' 
                            name='searchInput'
                            value={this.state.search}
                            placeholder='Search by title'
                            onChange={e => this.handleChange(e)}
                            />
                    <button 
                        className='search-btn'
                        onClick={this.handleSearch}
                    >Search</button>
                    </div>
                    <div>
                        <span>My Posts:</span>
                        <input
                            type='checkbox'
                            onClick={this.handleToggle}
                            onChange={() => this.componentDidMount}
                        />
                    </div>
                </div>
                <div className='posts-container'>
                    {mappedPosts}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {setUser})(Dashboard);