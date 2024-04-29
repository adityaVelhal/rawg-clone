import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useGames from '../hooks/useGames';
import GameQuery from './../models/GameQuery';
import React from 'react';

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading, fetchNextPage, isFetching, hasNextPage } =
        useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Box padding="10px">
            {error && <Text>{error.message}</Text>}

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />{' '}
                        </GameCardContainer>
                    ))}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />{' '}
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
            {hasNextPage && (
                <Button
                    marginY={5}
                    onClick={() => fetchNextPage()}
                    disabled={isFetching}
                >
                    {isFetching ? 'Loading...' : 'Load More'}
                </Button>
            )}
        </Box>
    );
};

export default GameGrid;
