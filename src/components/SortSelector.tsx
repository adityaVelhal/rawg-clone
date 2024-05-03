import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameStore from '../store';

const SortSelector = () => {
    const [sortOrder, setSortOrder] = useGameStore((s) => [
        s.gameQuery.sortOrder,
        s.setSortOrder,
    ]);
    const sortSelector = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: '-name', label: 'Name' },
        { value: '-released', label: 'Released date' },
        { value: '-rating', label: 'Rating' },
        { value: '-metacritic', label: 'Popularity' },
    ];

    const currentOrder = sortSelector.find(
        (order) => order.value === sortOrder
    );
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortSelector.map((sort) => (
                    <MenuItem
                        onClick={() => setSortOrder(sort.value)}
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
