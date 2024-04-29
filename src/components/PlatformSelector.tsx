import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import Platform from '../models/Platform';

interface Props {
    onSelectPlatform: (platformId: number) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data, error } = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {data?.results.find(
                    (platform) => platform.id === selectedPlatformId
                )?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                {data?.results.map((d) => (
                    <MenuItem onClick={() => onSelectPlatform(d.id)} key={d.id}>
                        {d.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
