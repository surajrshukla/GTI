import axios from "axios";
import { base_url } from "../../common/api.helper";

export const addUser = async (formdata: unknown) => {
    const options = {
        headers: { "Content-Type": "multipart/form-data" },
    };
    return await axios.post(`${base_url}/users/register`, formdata, options);
};

export const getAllUsers = async () => {
    return await axios.get(`${base_url}/users`);
};
