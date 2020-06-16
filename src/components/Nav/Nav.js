import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setUser, getUser} from '../../ducks/userReducer'

import './Nav.css'
// import axios from 'axios'

class Nav extends Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }

    componentDidMount(){
        this.props.getUser()
    }

    // getUser = () => {
    //     axios.get('/auth/me')
    //     .then(res => {
    //         this.props.setUser(res.data[0])
    //     })
    // }

    render(){

        return(
            <div className='navbar'>
            <div className='user-info'>
                <div className='img-container'>
                    <img className='user-img' alt={this.props.users.username} src={this.props.users.profile_pic}/>
                </div>
                {this.props.users.username}
                {console.log(this.props)}
            </div>
            <div className='links'>
                <Link to='/dashboard'>
                    <button className='link'>Dashboard</button>
                </Link>
                <Link to='/new'>
                    <button className='link'>New Post</button>
                </Link>
            </div>
            <div className='logout'>
                <Link to='/'>
                    <button className='logout-btn'>Logout</button>
                </Link>
            </div>
        </div>
    )
}
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {setUser, getUser})(Nav);