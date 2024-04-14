import {
    Button,
    HStack,
    Image,
    List,
    ListItem,
    Spinner
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url.';
import Genre from '../models/Genre';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre,selectedGenre }: Props) => {
    const { data, error, isLoading } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;
    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button
                            fontWeight={selectedGenre?.id === genre.id ? 'bold': 'normal'}
                            onClick={() => onSelectGenre(genre)}
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
    );
};

export default GenreList;
