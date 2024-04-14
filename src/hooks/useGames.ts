import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import Game from '../models/Games';
import useData from './useData';
import Genre from '../models/Genre';

const useGames = (genre: Genre | null) =>
    useData<Game>('/games', { params: { genres: genre?.id } }, [genre]);

export default useGames;
