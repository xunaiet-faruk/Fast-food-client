import axios from "axios";

export const AxiosPublic =axios.create({
    baseURL:'http://localhost:5000'
})
const UseaxiosPublic = () => {
    return AxiosPublic;
};

export default UseaxiosPublic;