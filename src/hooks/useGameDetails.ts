import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import Game from '../models/Games';

const apiClient = new APIClient<Game>('/games')

const useGameDetails = (slug: string) =>
    useQuery<Game, Error>({
        queryKey: ['games', slug],
        queryFn: () => apiClient.get(slug),
    });

export default useGameDetails;
