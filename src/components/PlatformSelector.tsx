import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
    onSelectPlatform: (platformId: number) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data, error } = usePlatforms();

    if (error) return null;

    const selectedPlatform = usePlatform(selectedPlatformId)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                { selectedPlatform?.name || 'Platform'}
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
