import axios from "axios";
import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const thisWeekData = async () => {
    try {
        const reqUrl = `${backendUrl}/tasks/thisWeek`;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 400) {
            return toast.error(error.response.data.message);
        } else if (error.response && error.response.status === 401) {
            return toast.error(error.response.data.message);
        } else {
            return toast.error(error.response.data.message);
        }
    }}