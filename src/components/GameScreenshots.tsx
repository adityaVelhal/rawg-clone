import React from 'react';
import useScreenshots from '../hooks/useScreenshots';
import { Image, SimpleGrid } from '@chakra-ui/react';

interface Props {
    gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
    const { data, isLoading, error } = useScreenshots(gameId);

    if (isLoading) return null;
    if (error) throw error;

    return (
        <SimpleGrid spacing={2} columns={{base:1, md: 2}}>
            {data?.results.map((ss) => (
                <Image key={ss.id} src={ss.image} />
            ))}
        </SimpleGrid>
    );
};

export default GameScreenshots;
