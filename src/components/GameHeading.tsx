import { Heading } from '@chakra-ui/react';
import GameQuery from '../models/GameQuery';
import useGenres from '../hooks/useGenre';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const { data: genres } = useGenres();
    const { data: platforms } = usePlatforms();

    const selectedGenre = genres?.results.find(
        (genre) => genre.id === gameQuery.genreId
    )?.name;
    const selectedPlatform = platforms?.results.find(
        (platform) => platform.id === gameQuery.platformId
    )?.name;

    const heading = `${selectedPlatform || ''} ${selectedGenre || ''} Games`;

    return (
        <Heading as="h1" marginY={5} fontSize="5xl">
            {heading}
        </Heading>
    );
};

export default GameHeading;
