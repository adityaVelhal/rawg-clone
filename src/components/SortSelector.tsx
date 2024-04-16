import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectSort: (sortOrder: string) => void
  selectedSort: string | null
}

const SortSelector = ({onSelectSort, selectedSort}:Props) => {
    const sortSelector = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: '-name', label: 'Name' },
        { value: '-released', label: 'Released date' },
        { value: '-rating', label: 'Rating' },
        { value: '-metacritic', label: 'Popularity' },
    ];

    const currentOrder = sortSelector.find(order => order.value === selectedSort)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortSelector.map((sort) => (
                    <MenuItem
                        onClick={() => onSelectSort(sort.value)}
                        key={sort.label}
                    >
                        {sort.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
