import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import GameQuery from '../models/GameQuery';
import useGameStore from '../store';

const GameHeading = () => {

    const [genreId, platformId] = useGameStore(s => [s.gameQuery.genreId, s.gameQuery.platformId])

    const selectedGenre = useGenre(genreId)
    
    /*useLookUp({
        data: genres?.results,
        id: gameQuery.genreId,
    });*/

    const selectedPlatform = usePlatform(platformId)
    
    /*useLookUp({
        data: platforms?.results,
        id: gameQuery.platformId,
    });*/

    const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`;

    return (
        <Heading as="h1" marginY={5} fontSize="5xl">
            {heading}
        </Heading>
    );
};

export default GameHeading;
