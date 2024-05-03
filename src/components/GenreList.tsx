import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url.';
import useGameStore from '../store';

const GenreList = () => {
    const [setGenreId, genreId] = useGameStore((s) => [
        s.setGenreId,
        s.gameQuery.genreId,
    ]);
    const { data, error, isLoading } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;
    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={
                                    genreId === genre.id
                                        ? 'bold'
                                        : 'normal'
                                }
                                onClick={() => setGenreId(genre.id)}
                                fontSize="large"
                                variant="link"
                            >
                                {' '}
                                {genre.name}{' '}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
