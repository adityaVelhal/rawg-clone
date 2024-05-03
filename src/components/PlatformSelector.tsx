import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';
import useGameStore from '../store';

const PlatformSelector = () => {
    const [platformId, setPlatformId] = useGameStore((s) => [
        s.gameQuery.platformId,
        s.setPlatformId,
    ]);
    const { data, error } = usePlatforms();

    if (error) return null;

    const selectedPlatform = usePlatform(platformId);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                {data?.results.map((d) => (
                    <MenuItem onClick={() => setPlatformId(d.id)} key={d.id}>
                        {d.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
