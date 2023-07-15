import { Box, Spacer } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import AppIcon from './appIcon';
import SearchBar from './searchbar';

export default function Nav() {
    return (
        <Box 
            p="3"
            display="flex" 
            alignItems="center"
            justifyContent="space-around" 
            border="1px"
            borderColor="gray.100"
            bg="white"
        >
            <AppIcon />
            <Spacer />
            <Box flexGrow="2" mx="2">
                <SearchBar />
            </Box>
            <Spacer />
            <Box mx="2">
                <ConnectButton showBalance={true} />
            </Box>
        </Box>
    );
}