import React, { Component } from 'react';
import { Tooltip, Link as ChakraLink, Text, Flex, Box as ChakraBox } from '@chakra-ui/core';
import { Link as RLink } from 'react-router-dom';

export interface HeaderNavLinkProps {
    to: string
    icon?: Component
    name?: string
}

const Link = ChakraLink as any
const Box = ChakraBox as any

export const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({ to, icon, name }) => {
    return (
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
        
    )
}