import Axios from 'axios';


export const postNewUser = (data) => dispatch => {
    return Axios({
        method: 'post',
        url: 'api/users/adduser',
        headers: {},
        data: data
    })
    .then(res => {return res})
    .catch(err => console.log(err));
}

export const loginUser = (data) => dispatch => {
    return Axios({
        method: 'post',
        url: 'api/users/login',
        headers: {},
        data: data
    })
    .then(res => {return res})
    .catch(err => console.log(err));
}