import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import GameQuery from '../models/GameQuery';
import Game from '../models/Games';
import APIClient, { FetchResponse } from '../services/apiClient';

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.search,
                    page: pageParam
                },
            }),
        staleTime: 10 * 60 * 1000, //10min
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1: undefined
        }
    });

export default useGames;
