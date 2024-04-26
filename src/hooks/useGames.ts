import { useQuery } from '@tanstack/react-query';
import GameQuery from '../models/GameQuery';
import Game from '../models/Games';
import apiClient, { FetchResponse } from '../services/api-client';

const useGames = (gameQuery: GameQuery) =>
    useQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            apiClient
                .get('/games', {
                    params: {
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.search,
                    },
                })
                .then((res) => res.data),
        staleTime: 10 * 60 * 1000 //10min
    });

/*useData<Game>(
        '/games',
        {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.search,
            },
        },
        [gameQuery]
    );*/

export default useGames;
