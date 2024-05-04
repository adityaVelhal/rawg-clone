import { Box, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGameDetails from '../hooks/useGameDetails';
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';

const GameDetailsPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGameDetails(slug!);

    if (isLoading) return <Spinner />;
    if (error || !game) throw error;
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <Box>
                <Heading>{game.name}</Heading>
                <ExpandableText>{game.description_raw}</ExpandableText>
                <GameAttributes game={game} />
            </Box>
            <Box>
                <GameTrailer id={game.slug} />
                <GameScreenshots gameId={game.id} />
            </Box>
        </SimpleGrid>
    );
};

export default GameDetailsPage;
