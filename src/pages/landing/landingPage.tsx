import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/core';
import Typing from 'react-typing-animation';

export const LandingPage: React.FC<{}> = () => {
    return (
        <Box>
            <Box d="flex" height="35%" flexDirection="column">
                <Heading fontSize="6xl" fontWeight="thin">Printing to protect our <b> <Typing>
                    Doctors
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={7} />
                    Patients
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={8} />
                    Heroes.
                    </Typing></b>
                </Heading>
                <Text fontSize="3xl">If you're a maker, it's <b>time to step up</b>.</Text>
                <Text fontSize="3xl">The world is in need, and <i>you</i> can help.</Text>
                
            </Box>
        </Box>

    )
}
