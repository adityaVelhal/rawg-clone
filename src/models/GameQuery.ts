import Genre from './Genre';
import Platform from './Platform';

export default interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    search: string
}
