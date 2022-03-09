import BoxSearch from "../../components/box-search";
import styled from 'styled-components'

const Box = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
`

const Center = styled.div`
    padding: 20px;
    width: calc( 100% - 40px);
    max-width: 500px;
    margin: auto;
`

const Home = () => {
    return (
        <Box>
            <Center>
                <BoxSearch />
            </Center>
        </Box>
    )
}

export default Home;