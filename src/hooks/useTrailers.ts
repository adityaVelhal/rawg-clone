import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import Trailer from '../models/Trailer';

const useTrailers = (id: number | string) => {
    const apiClient = new APIClient<Trailer>(`/games/${id}/movies`)
    return useQuery({
        queryKey: ['trailers', id],
        queryFn: apiClient.getAll
    });
};

export default useTrailers;
