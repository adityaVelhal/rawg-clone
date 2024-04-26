import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_GENRE } from '../constants';
import genres from '../data/genres';
import Genre from '../models/Genre';
import apiClient, { FetchResponse } from '../services/api-client';

const useGenres = () =>
    useQuery({
        queryKey: CACHE_KEY_GENRE,
        queryFn: () =>
            apiClient
                .get<FetchResponse<Genre>>('/genres')
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: {count: genres.length, results: genres}
    });

export default useGenres;
