const initialState = {
    id: NaN,
    username: '',
    password: '',
    profile_pic: ''
}

const SET_USER = 'SET_USER'
const GET_USER = 'GET_USER'

export function setUser(userObj) {
    return {
        type: SET_USER,
        payload: userObj
    }
}

export function getUser() {
    return {
        type: GET_USER
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case SET_USER:
            return {...state, ...payload}
        case GET_USER: 
            return {...state}
        default:
            return state
    }
}