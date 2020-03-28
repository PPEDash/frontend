import { Box, Text } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

export const BoxLink: React.FC<{text: string, to: string}> = ({text, to}) => {
    const history = useHistory()
    const [ hovered, setHover ] = useState(false)
    return (
        <Box onClick={() => history.push(to)} border="1px" onMouseEnter={() => setHover(true)} onMouseLeave={()=>setHover(false)} bg={hovered ? "teal.700" : "teal.50"} color={!hovered ? "teal.700" : "teal.50"} borderRadius="md" borderColor="teal.700" padding="32" transition="all 0.1s ease-in" cursor="pointer">
            <Text fontSize="lg">{text}</Text>

        </Box>
    )
}