import { useEffect, useState } from "react";
import useUnsplash from "../../hooks/useUnsplash";
import { useParams } from 'react-router-dom';
import ListPhotos from "../../components/list-photos";
import BoxSearch from "../../components/box-search";
import styled from 'styled-components'

const Box = styled.div`
    width: 100%;
    display: grid;
`

const Center = styled.div`
    padding: 20px;
    width: calc( 100% - 40px);
    max-width: 500px;
    margin: auto;
`

const Photos = () => {
    const { getPhotosByQuery } = useUnsplash()
    const [photos, setPhotos] = useState<Array<any>>([])
    const { find } = useParams()

    useEffect(() => {
        (async () => {
            if (find) {
                const res = await getPhotosByQuery({ query: find })
                setPhotos(res?.results || [])
            }
        })()
    }, [find])

    return (
        <Box>
            <Center>
                <BoxSearch defaultFind={find}/>
            </Center>
            <ListPhotos items={photos} />
        </Box>
    )
}

export default Photos;