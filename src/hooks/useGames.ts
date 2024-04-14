import Game from '../models/Games';
import useData from './useData';
import Genre from '../models/Genre';
import Platform from './../models/Platform';

const useGames = (genre: Genre | null, platform: Platform | null) =>
    useData<Game>(
        '/games',
        { params: { genres: genre?.id, parent_platforms: platform?.id } },
        [genre?.id, platform?.id]
    );

export default useGames;
