import { createApi } from "unsplash-js";
import useAxios from './useAxios';

const unsplash = createApi({
    accessKey: 'BRxfuMpMrbBa5pOSqqka6j2xii9MMyRio0FscabH0Hs',
});

const useUnsplash = () => {
    const { get } = useAxios()

    const getPhotosByQuery = async ({ query }: { query: string }) => {
        const res = await unsplash.search.getPhotos({ query })
        return res.response;
    }

    const getAutosuggestionsByWord = async ({ word }: { word: string }) => {
        const res = await get({ url: `https://unsplash.com/nautocomplete/${word}` })
        console.log(res)
        return res;
    }

    return { getPhotosByQuery, getAutosuggestionsByWord }
}

export default useUnsplash;