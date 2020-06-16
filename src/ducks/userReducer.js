const initialState = {
    user_id: 0,
    username: '',
    password: '',
    profile_pic: ''
}

const SET_USER = 'SET_USER'
// const GET_USER = 'GET_USER'


export function setUser(userObj) {
    return {
        type: SET_USER,
        payload: userObj
    }
}

// export default function getUser(){
//     const user = axios.get('auth/user')

//     return{
//         type: GET_USER,
//         payload: user
//     }
// }


export default function reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case SET_USER:
            return {...state, ...payload}
        // case GET_USER + "_PENDING":
        //     return state
        // case GET_USER + "_RESOLVED":
        //     return {...state, uyser: action.payload.data, isLoggedIn: true}
        // case GET_USER + "_REJECTED":
        //     return initialState
        default:
            return state
    }
}