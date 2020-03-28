// @ts-ignore

import React from 'react'
import { Box, Text, Link as CLink, Icon, Flex } from '@chakra-ui/core';
import { Link as RLink } from 'react-router-dom';
import { FiPackage, FiGithub } from 'react-icons/fi'
import { HeaderNavLink as HLink } from './components/navLink';

const Link = CLink as any
const HeaderNavLink = HLink as any

export const HeaderComponent = () => {
    return (
        <Flex  flexDir="row" as="nav" justify="space-between" wrap="wrap" padding="6" align="center">
            <Link as={RLink} to="/"><Text fontSize="2xl">PPE<b>Dash</b></Text></Link>
            <HeaderNavLink to="/marketplace" icon={FiPackage} name="Marketplace" />
            {/* <Flex direction="row"> */}
            <HeaderNavLink to="https://github.com/ppedash" icon={FiGithub} name="Github" />
            {/* <HeaderNavLink to="https://github.com/ppedash" icon={Fi} name="Github" /> */}
            {/* </Flex> */}
            {/* <HeaderNavLink to="/"  icon={Fi} name="Marketplace"/> */}
        </Flex>
    )
}
