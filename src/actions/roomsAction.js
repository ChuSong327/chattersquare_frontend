import * as RoomsApiUtil from "../utils/roomsUtil";

export const updateRooms = (rooms) => {
    return {
        type: RoomsApiUtil.GET_ROOMS,
        rooms
    };
};

export const getRooms = () => {
    return (dispatch) => {
        return RoomsApiUtil.getRooms().then(rooms => {
            dispatch(updateRooms(rooms));
        });
    };
};

