import React, { Component } from 'react';
import { Tooltip, Link as ChakraLink, Text, Flex, Box as ChakraBox, useColorMode } from '@chakra-ui/core';
import { Link as RLink } from 'react-router-dom';
import { IconType } from 'react-icons/lib/cjs';
import { FiMoon } from 'react-icons/fi';

export interface HeaderNavLinkProps {
    to: string
    icon?: IconType
    name?: string
    type?: string
}

const Link = ChakraLink as any
const Box = ChakraBox as any

export const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({ to, icon, name, type }) => {

    const { colorMode, toggleColorMode } = useColorMode();

    console.log(colorMode)

    return (!(type === "themeChange") ? (
        <Tooltip hasArrow placement="bottom" aria-label={name as string} label={name} fontFamily="Work Sans" bg="teal.300">
            <Link as={RLink} to={to}>
                {
                    icon && <Box as={icon} size="3rem" />
                }
                {
                    icon === undefined && <Text fontSize="2xl">{name}</Text>
                }


            </Link>
        </Tooltip>
    ) : (
            <ChakraBox cursor="pointer" onClick={toggleColorMode}>
                <Box as={FiMoon} size="3rem" />
            </ChakraBox>
    ))
}