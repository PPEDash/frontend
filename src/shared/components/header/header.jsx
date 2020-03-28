// @ts-ignore

import React from 'react'
import { Box, Text, Link, Icon, Flex } from '@chakra-ui/core';
import { Link as RLink } from 'react-router-dom';
import { FiPackage } from 'react-icons/fi'

export const HeaderComponent = () => {
    return (
        <Flex flexDir="row"   align="center">
            <Link as={RLink} to="/"><Text>PPE<b>Dash</b></Text></Link>
            <Link as={RLink} to="/"><Box as={FiPackage}/></Link>
        </Flex>
    )
}
