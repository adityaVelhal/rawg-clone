import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import GameQuery from '../models/GameQuery';
import Game from '../models/Games';
import APIClient, { FetchResponse } from '../services/apiClient';
import ms from 'ms';

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.search,
                    page: pageParam
                },
            }),
        staleTime: ms('24h'),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1: undefined
        }
    });

export default useGames;
