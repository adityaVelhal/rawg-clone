import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import Game from '../models/Games';
import useData from './useData';

const useGames = () => useData<Game>('/games');

export default useGames;
