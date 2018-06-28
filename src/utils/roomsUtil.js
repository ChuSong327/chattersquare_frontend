import axios from "axios";

export const GET_ROOMS = "GET_ROOMS";

export const getRooms = () => {
    const url = "http://localhost:3000/api/rooms";
    return axios.get(url, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).then(res => {
        return res.data;
    });
};