import axios from "axios";

const useAxios = () => {

    const get = async ({ url }: { url: string }) => {
        return await axios.get(`${url}`, { withCredentials: true });
    }

    return { get }
}

export default useAxios;