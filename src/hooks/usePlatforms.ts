import useData from "./useData";
import Platform from './../models/Platform';

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms