import { axiosinstance } from "../../Network/axiosinstance";

export const getTimeTable = () => async (dispatch) => {
    try {
        const res = await axiosinstance.get("/classtimetable/table", {
            params: {
                grade: "one"
            }
        });
        console.log(res.data)
        return dispatch({
            type: "GET_TIMETABLE_DATA",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }
}