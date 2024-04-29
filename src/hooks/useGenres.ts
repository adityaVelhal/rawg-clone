import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_GENRE } from '../constants';
import genres from '../data/genres';
import Genre from '../models/Genre';
import APIClient, { FetchResponse } from '../services/apiClient';
import ms from 'ms';

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () =>
    useQuery({
        queryKey: CACHE_KEY_GENRE,
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: genres,
    });

export default useGenres;
