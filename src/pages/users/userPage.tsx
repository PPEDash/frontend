import React, { useEffect, useState } from 'react'
import { Box, Avatar } from '@chakra-ui/core'
import { user as RxUser } from 'rxfire/auth';
import { auth } from '../../shared/firebase/firebase';
import { User } from 'firebase';

export const UserPage = () => {

    const [user, setUser] = useState<User | undefined>(undefined)

    useEffect(() => {

        RxUser(auth).subscribe(user => setUser(user))
    }, [setUser])


    return (
        <Box>
            <Avatar/>
        </Box>
    )
}
