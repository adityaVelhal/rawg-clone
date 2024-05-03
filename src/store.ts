import { create } from 'zustand';
import GameQuery from './models/GameQuery';

interface GameStore {
    gameQuery: GameQuery;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSearchText: (searchText: string) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameStore = create<GameStore>((set) => ({
    gameQuery: {} as GameQuery,
    setGenreId: (genreId) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setPlatformId: (platformId) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
    setSearchText: (search) =>
        set(() => ({ gameQuery: { search } })),
    setSortOrder: (sortOrder) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameStore;
