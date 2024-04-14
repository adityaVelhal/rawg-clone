import React from 'react';
import useGenres from '../hooks/useGenre';
import { Text } from '@chakra-ui/react';

const GenreList = () => {
    const { genres } = useGenres();
    return (
        <>
            {genres.map((genre) => (
                <Text>{genre.name}</Text>
            ))}
        </>
    );
};

export default GenreList;
