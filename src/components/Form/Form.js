import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()

        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    render(){
        return(
            <div>Form.js</div>
        )
    }
}

export default Form