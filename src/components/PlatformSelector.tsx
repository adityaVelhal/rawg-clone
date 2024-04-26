import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import Platform from '../models/Platform';

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
    const { data, error } = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                {data?.results.map((d) => (
                    <MenuItem onClick={() => onSelectPlatform(d)} key={d.id}>
                        {d.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
