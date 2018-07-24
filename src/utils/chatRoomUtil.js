import axios from "axios";
import {prod, dev} from "./port";

export const GET_ROOM = "GET_ROOM";
export const GET_ROOM_MESSAGES = "GET_ROOM_MESSAGES";
export const POST_ROOM_MESSAGES = "POST_ROOM_MESSAGES";
export const GET_ROOM_USERS = "GET_ROOM_USERS";
export const GET_ALL_ROOMS = "GET_ALL_ROOMS";

const PORT = process.env.NODE_ENV === 'production' ? prod: dev;

export const retrieveCurrentRoom = params => {
    const url = `${PORT}/api/rooms/getcurrentroom/${params}`;
    return axios.get(url, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).then(res => {
        return res.data;
    })
};

export const getRoomMessages = room_id => {
    const url = `${PORT}/api/rooms/getroommessages/${room_id}`;
    return axios.get(url, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).then(res => {
        return res.data;
    })
};

export const postRoomMessages = params => {
    const url = `${PORT}/api/rooms/postroommessages`;
    return axios.post(url, params, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).then(res => {
        return res.data;
    })
};

export const getRoomUsers = params => {
    const url = `${PORT}/api/rooms/getroomusers/${params}`;
    return axios.get(url,  {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).then(res => {
        return res.data;
    })
};

export const getAllRooms = () => {
    const url = `${PORT}/api/rooms/getallrooms`;
    return axios.get(url, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).then(res => {
        return res.data;
    }).catch(error => {
        console.log("This is an error: ", error);
    })
};