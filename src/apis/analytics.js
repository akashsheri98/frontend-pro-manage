import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
console.log(backendUrl);

export const AnalyticsData = async () => {
    try {
        const reqUrl = `${backendUrl}/analytics/analytics`;

        const response = await axios.get(reqUrl , {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token') || localStorage.getItem('token')}`
            }
        });
        //console.log(response.data);
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
    }

}