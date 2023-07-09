import { Box, Button, Spacer } from '@chakra-ui/react';
import { useState } from 'react';
import AppIcon from './appIcon';
import SearchBar from './searchbar';

export default function Nav() {
    const [isLogin, setIsLogin] = useState(false);

    function handleIsLogin() {
        setIsLogin(!isLogin);
    }

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
                <Button 
                    isLoading={isLogin}
                    colorScheme="white"
                    variant="outline"
                    onClick={handleIsLogin}
                >
                    Connect Wallet
                </Button>
            </Box>
        </Box>
    );
}