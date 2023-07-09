import { Box, Image, Text } from '@chakra-ui/react';

export default function AppIcon() {
    return (
        <>
            <Box display="flex" alignItems="center" rowGap="5" px="2">
                <Image 
                    borderRadius="full"
                    boxSize="50px"
                    src="https://bit.ly/dan-abramov"
                    alt="borrowing dan profile picture"
                    mx="2"
                />
                <Text fontSize="xl">OpenSee</Text>
            </Box>
        </>
    );
}