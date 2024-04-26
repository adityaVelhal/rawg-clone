import { useQuery } from '@tanstack/react-query';
import GameQuery from '../models/GameQuery';
import Game from '../models/Games';
import APIClient, { FetchResponse } from '../services/apiClient';

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
    useQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.search,
                },
            }),
        staleTime: 10 * 60 * 1000, //10min
    });

export default useGames;
