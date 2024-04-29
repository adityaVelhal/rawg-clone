import { Grid, GridItem, HStack, Show, Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import GameQuery from './models/GameQuery';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr',
            }}
        >
            <GridItem area="nav">
                <NavBar onSearch={(search) => setGameQuery({...gameQuery, search})} />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        onSelectGenre={(genreId) =>
                            setGameQuery({ ...gameQuery, genreId })
                        }
                        selectedGenreId={gameQuery.genreId}
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery} />
                    <HStack spacing={5}  marginBottom={5}>
                        <PlatformSelector
                            selectedPlatformId={gameQuery.platformId}
                            onSelectPlatform={(platformId) =>
                                setGameQuery({ ...gameQuery, platformId })
                            }
                        />
                        <SortSelector selectedSort={gameQuery.sortOrder} onSelectSort={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                    </HStack>
                </Box>
                <GameGrid
                    gameQuery={gameQuery}
                />
            </GridItem>
        </Grid>
    );
}

export default App;
