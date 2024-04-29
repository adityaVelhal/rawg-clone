import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_GENRE } from '../constants';
import genres from '../data/genres';
import Genre from '../models/Genre';
import APIClient, { FetchResponse } from '../services/apiClient';

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () =>
    useQuery({
        queryKey: CACHE_KEY_GENRE,
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: genres,
    });

export default useGenres;
