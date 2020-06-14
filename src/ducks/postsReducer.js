// import axios from 'axios'

const initialState = {
    id: NaN,
    title: '',
    img: '',
    content: '',
    author_id: NaN,
    posts: []
}

export default function (state = initialState, action){
    const {type, payload} = action
    switch(type) {
        default:
            return state
    }
}