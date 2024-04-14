import Game from '../models/Games';
import useData from './useData';
import GameQuery from '../models/GameQuery';


const useGames = (gameQuery: GameQuery) =>
    useData<Game>(
        '/games',
        { params: { genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id } },
        [gameQuery]
    );

export default useGames;
