import axios from "axios";
import { base_url } from "../../common/api.helper";

export const addBook = async (formdata: unknown) => {
    return await axios.post(`${base_url}/books/add`, { book: formdata });
};
