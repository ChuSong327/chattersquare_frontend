import axios from "axios";
import { prod, dev } from "./port";

export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const RETRIEVE_USER = "RETRIEVE_USER";
export const UPDATE_USER_INFO = "UPDATE_USER_INFO";
export const GET_FRIENDS = "GET_FRIENDS";
export const DELETE_FRIENDS = "DELETE_FRIENDS";
export const ADD_FRIENDS = "ADD_FRIENDS";
export const GET_ROOMS = "GET_ROOMS";
export const JOIN_ROOM = "JOIN_ROOM";
export const REMOVE_ROOM = "REMOVE_ROOM";

const PORT = process.env.NODE_ENV === 'production' ? prod: dev;

export const signIn = (params) => {
    const url = `${PORT}/api/users/signin`;
    return axios.post(url, params)
    .then(res => {
        return res.data;
    })
    .catch((error) => {
        console.log("This is an error: ", error);
    });
};

export const signUp = (params) => {
    const url = `${PORT}/api/users/signup`;
    return axios.post(url, params)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log("This is an error: ", error);
        });
};

export const retrieveUser = (params) => {
    const url = `${PORT}/api/users/retrieveuser/${params}`;
    return axios.get(url).then(res => {
        return res.data;
    })
    .catch(error => {
        console.log("This is an error: ", error);
    });
};

export const updateUserInfo = params => {
    const url = `${PORT}/api/users/updateuserinfo`;
    return axios.post(url, params)
    .then(res => {
        return res.data;
    })
    .catch((error) => {
        console.log("This is an error: ", error);
    });
};

export const getFriends = params => {
    const url = `${PORT}/api/users/getfriends/${params}`;
    return axios.get(url).then(res => {
        return res.data;
    })
    .catch(error => {
        console.log("This is an error: ", error);
    });
};

export const deleteFriends = params => {
    const url = `${PORT}/api/users/deletefriends`;
    return axios.post(url, params).then(res => {
        return res.data;
    })
    .catch((error) => {
        console.log("This is an error: ", error);
    });
};

export const addFriends = params => {
    const url = `${PORT}/api/users/addfriends`;
    return axios.post(url, params).then(res => {
        return res.data
    }).catch(error => {
        console.log("This is an error: ", error);
    })
};

export const getRooms = params => {
    const url = `${PORT}/api/users/getrooms/${params}`;
    return axios.get(url).then((res) => {
        return res.data;
        })
        .catch(error => {
            console.log("This is an error: ", error);
        });
};

export const joinRoom = params => {
    const url = `${PORT}/api/users/joinroom`;
    return axios.post(url, params).then(res => {
        return res.data;
    }).catch(error => {
        console.log("This is the error: ", error);
    })
};

export const removeRoom = params => {
    const url = `${PORT}/api/users/removeroom`;
    return axios.post(url, params).then(res => {
        return res.data;
    }).catch(error => {
        console.log("This is an error: ", error);
    })
};

export const uploadProfile = params => {
    const url="https://api.cloudinary.com/v1_1/chu327/upload";
    let formData = new FormData();
    formData.append("file", params.file);
    formData.append("upload_preset", params.preset);
    return axios({
        url: url,
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData
    }).then(res => {
        return res.data
    }).catch(error => {
        console.log("This is an error: ", error);
    })
};