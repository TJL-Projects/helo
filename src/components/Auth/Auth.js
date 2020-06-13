import React, {Component} from 'react'
import './Auth.css'

class Auth extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(this.state)
    }

    render(){
        return(
            <div className='auth'>  
                <div className='login-container'>
                    <div>Winky Face</div>
                    <div>Helo</div>
                    <div className='inputs-container'>
                        <div className='username'>
                            <span>Username: </span>
                            <input 
                                name='username' 
                                value={this.state.username} 
                                onChange={e => this.handleChange(e)}
                            />
                        </div>
                        <div className='password'>
                            <span>Password:</span>
                            <input 
                                name='password' 
                                value={this.state.password} 
                                onChange={e => this.handleChange(e)} 
                            />
                        </div>
                    </div>
                    <div className='btns-container'>
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth