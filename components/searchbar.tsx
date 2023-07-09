import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

export default function SearchBar() {
    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none" fontSize="1.2rem">
                <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input placeholder="Search items, colelctions, and accounts"/>
        </InputGroup>
    );
}