import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_PLATFORM } from '../constants';
import platforms from '../data/platforms';
import APIClient from '../services/apiClient';
import Platform from './../models/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () =>
    useQuery({
        queryKey: CACHE_KEY_PLATFORM,
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: platforms
    });

export default usePlatforms;
