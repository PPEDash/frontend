import React, { useState } from 'react'
import { Box, Heading, Text, Button, Link, Flex, Image, Divider } from '@chakra-ui/core';
import Typing from 'react-typing-animation';
import { Link as RLink, useHistory } from 'react-router-dom';
import BuildImage from '../../resources/images/buildimg.png'
import { BoxLink } from './components/boxLink';

export const LandingPage: React.FC<{}> = () => {

    const history = useHistory()
    const [hoverPad, setHoverPad] = useState("24")

    return (
        <Box>
            <Box d="flex" height="35%" flexDirection="column">
                <Flex flexDirection="row" >
                    <Heading marginY="32" fontSize="6xl" fontWeight="thin">Printing to protect our <b> <Typing>
                        Doctors
                    <Typing.Delay ms={1000} />
                        <Typing.Backspace count={7} />
                    Patients
                    <Typing.Delay ms={1000} />
                        <Typing.Backspace count={8} />
                    Heroes.
                    </Typing></b>
                    </Heading>
                    {/* <Image src={BuildImage} htmlHeight="4rem" htmlWidth="6rem" /> */}
                    {/* <Image src={BuildImage} htmlHeight="256em" htmlWidth="384rem" /> */}
                </Flex>
                <Text fontSize="3xl">If you're a maker, it's <b>time to step up</b>.</Text>
                <Text fontSize="3xl">The world is in need, and <i>you</i> can help.</Text>
                {/* @ts-ignore: TS2322
                <Link as={RLink}  /> */}
            </Box>
            
            <Flex marginTop="12" height="35%" flexDirection="row" justify="space-between" align="center">
                {/* <Flex direction="row" justify="space-between"> */}
                    
                    <BoxLink text="Maker" to="/makers"/>
                    <Heading marginY="18" fontSize="6xl" fontWeight="thin">I am a...</Heading>
                    <BoxLink text="Healthcare provider" to="/doctors" />
                {/* </Flex> */}
            </Flex>
        </Box>

    )
}
