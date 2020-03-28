import React, { useEffect, useState } from 'react'
import { Box, Heading, Text, Divider, Link, Flex, Button, FormControl, FormLabel, Input, Stack, Checkbox, CheckboxGroup } from '@chakra-ui/core';
import { User } from 'firebase';
import { app, auth, firestore } from '../../shared/firebase/firebase';
import { user as RxUser } from "rxfire/auth";
import firebase from 'firebase/app';
import { FiAlertCircle, FiCheckCircle, FiUserCheck } from 'react-icons/fi';
import { FaGoogle } from "react-icons/fa";
import { Formik, Field, useFormik } from 'formik'

export const MakerStartPage = () => {

    const login = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        app.auth().signInWithPopup(provider)
    }

    const formik = useFormik({
        initialValues: {
            printer: "",
            plasticsAvailable: [""],
            location: "",
            timeAvailable: ""
        },
        onSubmit: (async (e, a) => {
            console.log(e)
            console.log(a)
        })
    })

    const [user, setUser] = useState<User | undefined>(undefined)

    useEffect(() => {

        RxUser(auth).subscribe(user => setUser(user))
    }, [setUser])

    return (
        <Box paddingX={[0, 6, 12, 32]}>
            <Box paddingY="6">
                <Heading marginY="18" fontSize="6xl" fontWeight="thin">Makers, Unite.</Heading>
                <Text>We're bringing the power of crowdsourcing to help fight disease.</Text>
            </Box>
            <Divider />
            <Heading fontSize="6xl" fontWeight="thin">Get Started</Heading>
            <Flex><Text>We don't store any data that you don't give us, or that we don't have express consent for.</Text></Flex>
            <Flex align="center"> <Button leftIcon={FaGoogle} onClick={login} isDisabled={user !== undefined}>Log In</Button> <Box paddingX="3" size="2rem" as={FiUserCheck} /></Flex>
            {
                !!user && (
                    <Box>
                        <Text fontSize="2xl">Let's go, {user.displayName}!</Text>
                        <Flex >
                            <Box border="1px" padding={[3, 6, 9, 12]} marginY="2rem" borderRadius="md" borderColor="teal.700">
                                <Heading fontSize="4xl" fontWeight="thin">Maker Details</Heading>
                                <form onSubmit={formik.handleSubmit}>
                                    <FormControl>
                                        <Text>What 3d Printer do you have?</Text>
                                        <Input
                                            isFullWidth={false}
                                            placeholder="3D Printer"
                                            id="printer"
                                            name="printer"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.printer}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <Text>What plastics do you have access to?</Text>
                                        <CheckboxGroup value={formik.values.plasticsAvailable} onChange={(values) => formik.setValues({ ...formik.values, plasticsAvailable: values as string[] })} variantColor="teal">
                                            <Checkbox fontFamily="text" value="itachi">Itachi</Checkbox>
                                            <Checkbox fontFamily="text" value="madara">Madara</Checkbox>
                                            <Checkbox fontFamily="text" value="kisame">Kisame</Checkbox>
                                        </CheckboxGroup>
                                    </FormControl>

                                    <FormControl>
                                        <Text>What plastics do you have access to?</Text>
                                        <CheckboxGroup value={formik.values.plasticsAvailable} onChange={(values) => formik.setValues({ ...formik.values, plasticsAvailable: values as string[] })} variantColor="teal">
                                            <Checkbox fontFamily="text" value="itachi">Itachi</Checkbox>
                                            <Checkbox fontFamily="text" value="madara">Madara</Checkbox>
                                            <Checkbox fontFamily="text" value="kisame">Kisame</Checkbox>
                                        </CheckboxGroup>
                                    </FormControl>

                                </form>
                            </Box>
                            <Box border="1px" padding={[3, 6, 9, 12]} marginY="2rem" borderRadius="md" borderColor="teal.700">
                                <Heading fontSize="4xl" fontWeight="thin">Personal Details</Heading>
                                <form onSubmit={formik.handleSubmit}>
                                    <FormControl>
                                        <Text>What 3d Printer do you have?</Text>
                                        <Input
                                            isFullWidth={false}
                                            placeholder="3D Printer"
                                            id="printer"
                                            name="printer"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.printer}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <Text>What plastics do you have access to?</Text>
                                        <CheckboxGroup value={formik.values.plasticsAvailable} onChange={(values) => formik.setValues({ ...formik.values, plasticsAvailable: values as string[] })} variantColor="teal">
                                            <Checkbox fontFamily="text" value="itachi">Itachi</Checkbox>
                                            <Checkbox fontFamily="text" value="madara">Madara</Checkbox>
                                            <Checkbox fontFamily="text" value="kisame">Kisame</Checkbox>
                                        </CheckboxGroup>
                                    </FormControl>

                                    <FormControl>
                                        <Text>What plastics do you have access to?</Text>
                                        <CheckboxGroup value={formik.values.plasticsAvailable} onChange={(values) => formik.setValues({ ...formik.values, plasticsAvailable: values as string[] })} variantColor="teal">
                                            <Checkbox fontFamily="text" value="itachi">Itachi</Checkbox>
                                            <Checkbox fontFamily="text" value="madara">Madara</Checkbox>
                                            <Checkbox fontFamily="text" value="kisame">Kisame</Checkbox>
                                        </CheckboxGroup>
                                    </FormControl>

                                </form>
                            </Box>

                        </Flex>
                    </Box>

                )
            }



        </Box>
    )
}
