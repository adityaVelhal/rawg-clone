import React from 'react';
import useGameDetails from '../hooks/useGameDetails';
import { useParams } from 'react-router-dom';
import { Heading, Spinner, Text } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';

const GameDetailsPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGameDetails(slug!);

    if (isLoading) return <Spinner />;
    if (error || !game) throw error
    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
        </>
    );
};

export default GameDetailsPage;
