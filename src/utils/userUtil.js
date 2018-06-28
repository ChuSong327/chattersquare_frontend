import axios from "axios";

export const GET_USERS = "GET_USERS"


export const getUsers = () => {
    const url = "http://localhost:3000/api/users"
    return axios.get(url, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).then(res => {
        return res.data;
    })
}