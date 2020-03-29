// @ts-ignore

import React, { useEffect, useState } from 'react'
import { Box, Text, Link as CLink, Icon, Flex, Avatar, Tooltip } from '@chakra-ui/core';
import { Link as RLink } from 'react-router-dom';
import { FiPackage, FiGithub, FiLogOut } from 'react-icons/fi'
import { HeaderNavLink as HLink } from './components/navLink';
import { User } from 'firebase';
import { user as RxUser } from 'rxfire/auth';
import { auth } from '../../firebase/firebase';
import { async } from 'rxjs/internal/scheduler/async';

const Link = CLink as any
const HeaderNavLink = HLink as any

export const HeaderComponent = () => {

    const [user, setUser] = useState<User | undefined>(undefined)

    useEffect(() => {

        RxUser(auth).subscribe(user => setUser(user))
    }, [setUser])

    return (
        <Flex  flexDir="row" as="nav" justify="space-between" wrap="wrap" padding="6" align="center">
            <Link as={RLink} to="/"><Text fontSize="2xl">PPE<b>Dash</b></Text></Link>
            <HeaderNavLink to="/marketplace" icon={FiPackage} name="Marketplace" />
            {/* <Flex direction="row"> */}
            <HeaderNavLink to="https://github.com/ppedash" icon={FiGithub} name="Github" />
            <HeaderNavLink type="themeChange" />
            {
                (user !== null) && (
                    <Tooltip hasArrow placement="bottom" aria-label={"User"} label={"User"} fontFamily="Work Sans" bg="teal.300">
            <Link as={RLink} to={`/users/${user?.uid}`}>
            <Avatar name={user?.displayName as string} src={user?.photoURL as string} />

            </Link>
        </Tooltip>
                )
            }
            {
                (user !== null) && (
                    <Tooltip hasArrow placement="bottom" aria-label={"Log Out"} label={"Log Out"} fontFamily="Work Sans" bg="teal.300">
            <Link as={RLink} to={`/users/${user?.uid}`}>
            <Box size="3rem" as={FiLogOut} onClick={async () => await auth.signOut()} />

            </Link>
        </Tooltip>
                )
            }
            {/* <HeaderNavLink to="https://github.com/ppedash" icon={Fi} name="Github" /> */}
            {/* </Flex> */}
            {/* <HeaderNavLink to="/"  icon={Fi} name="Marketplace"/> */}
        </Flex>
    )
}
