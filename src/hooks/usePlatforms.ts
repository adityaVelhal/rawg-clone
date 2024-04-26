import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_PLATFORM } from '../constants';
import apiClient, { FetchResponse } from '../services/api-client';
import Platform from './../models/Platform';
import platforms from '../data/platforms'

const usePlatforms = () =>
    useQuery({
        queryKey: CACHE_KEY_PLATFORM,
        queryFn: () =>
            apiClient
                .get<FetchResponse<Platform>>('/platforms/lists/parents')
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: {count: platforms.length, results: platforms}
    });

export default usePlatforms;
