import React from 'react'
import { Text, Spinner, Box } from '@chakra-ui/core'

export const LoadingPage = () => {
    return (
        <Box d="flex" flexDir="column">
            <Spinner/>
            
        </Box>
    )
}
