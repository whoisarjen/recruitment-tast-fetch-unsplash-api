import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useUnsplash from '../../hooks/useUnsplash';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const BoxSearch = ({ defaultFind = '' }: { defaultFind?: string }) => {
    const { getAutosuggestionsByWord } = useUnsplash()
    const [open, setOpen] = useState(false)
    const [find, setFind] = useState(defaultFind)
    const [loading] = useState()
    const [isFirstRender, setIsFirstRender] = useState(true)
    const navigate = useNavigate();

    const handleKeyPress = (event: any) => {
        if (event.key === "Enter") {
            search()
        }
    };

    const search = async () => {
        navigate(`/photos/${find}`)
    }

    useEffect(() => {
        (async () => {
            await getAutosuggestionsByWord({ word: 's' })
        })()
        if (open == false && !isFirstRender) search()
        setIsFirstRender(false)
    }, [open])

    return (
        <Autocomplete
            sx={{ marginBottom: '10px' }}
            open={open}
            value={find}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            isOptionEqualToValue={(option, value) => option.toLowerCase() == value.toLowerCase()}
            getOptionLabel={option => option ? option : ''}
            options={top100Films}
            loading={loading}
            onInputChange={(e, value) => setFind(value.trim())}
            renderInput={(params) => (
                <TextField
                    {...params}
                    onKeyPress={handleKeyPress}
                    label='Search'
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather: Part II',
    'The Dark Knight',
    '12 Angry Men',
    "Schindler's List",
    'Pulp Fiction',
    'The Good, the Bad and the Ugly',
    'Fight Club',
    'Forrest Gump',
    'Inception',
    "One Flew Over the Cuckoo's Nest",
    'Goodfellas',
    'The Matrix',
    'Seven Samurai',
    'City of God',
    'Se7en',
    'The Silence of the Lambs',
    "It's a Wonderful Life",
    'Life Is Beautiful',
    'The Usual Suspects',
    'Léon: The Professional',
    'Spirited Away',
    'Saving Private Ryan',
    'Once Upon a Time in the West',
    'American History X',
    'Interstellar',
    'Casablanca',
    'City Lights',
    'Psycho',
    'The Green Mile',
    'The Intouchables',
    'Modern Times',
    'Raiders of the Lost Ark',
    'Rear Window',
    'The Pianist',
    'The Departed',
    'Terminator 2: Judgment Day',
    'Back to the Future',
    'Whiplash',
    'Gladiator',
    'Memento',
    'The Prestige',
    'The Lion King',
    'Apocalypse Now',
    'Alien',
    'Sunset Boulevard',
    'The Great Dictator',
    'Cinema Paradiso',
    'The Lives of Others',
    'Grave of the Fireflies',
    'Paths of Glory',
    'Django Unchained',
    'The Shining',
    'WALL·E',
    'American Beauty',
    'The Dark Knight Rises',
    'Princess Mononoke',
    'Aliens',
    'Oldboy',
    'Once Upon a Time in America',
    'Witness for the Prosecution',
    'Das Boot',
    'Citizen Kane',
    'North by Northwest',
    'Vertigo',
    'Reservoir Dogs',
    'Braveheart',
    'M',
    'Requiem for a Dream',
    'Amélie',
    'A Clockwork Orange',
    'Like Stars on Earth',
    'Taxi Driver',
    'Lawrence of Arabia',
    'Double Indemnity',
    'Amadeus',
    'To Kill a Mockingbird',
    'Toy Story 3',
    'Logan',
    'Full Metal Jacket',
    'Dangal',
    'The Sting',
    '2001: A Space Odyssey',
    "Singin' in the Rain",
    'Toy Story',
    'Bicycle Thieves',
    'The Kid',
    'Inglourious Basterds',
    'Snatch',
    '3 Idiots',
    'Monty Python and the Holy Grail',
];

export default BoxSearch;