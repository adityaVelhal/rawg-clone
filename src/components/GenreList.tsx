import { Text } from '@chakra-ui/react';
import useData from '../hooks/useData';
import Genre from '../models/Genre';
import useGenres from '../hooks/useGenre';

const GenreList = () => {
    const { data, error, isLoading } = useGenres();
    return (
        <>
            {data.map((genre) => (
                <Text>{genre.name}</Text>
            ))}
        </>
    );
};

export default GenreList;
