import React, { useEffect, useState } from 'react'
import { Box, Heading, Text, Divider, Link, Flex, Button, FormControl, FormLabel, Input, Stack, Checkbox, CheckboxGroup, NumberInput, Slider, SliderFilledTrack, SliderTrack, SliderThumb } from '@chakra-ui/core';
import { User } from 'firebase';
import { app, auth, firestore } from '../../shared/firebase/firebase';
import { user as RxUser } from "rxfire/auth";
import firebase from 'firebase/app';
import { FiAlertCircle, FiCheckCircle, FiUserCheck } from 'react-icons/fi';
import { FaGoogle } from "react-icons/fa";
import { Formik, Field, useFormik } from 'formik'
import { useHistory } from 'react-router-dom';

export const MakerStartPage = () => {

    const history = useHistory()
    const login = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        app.auth().signInWithPopup(provider)
    }

    const formik = useFormik({
        initialValues: {
            printer: "",
            plasticsAvailable: [""],
            location: "",
            timeAvailable: 0,

        },
        onSubmit: (async (e, a) => {
            await firestore.collection("users").doc(user?.uid).set({
                printer: e.printer,
                plasticsAvailable: e.plasticsAvailable.shift(),
                location: e.location,
                timeAvailable: e.timeAvailable,
            }).then(e => history.push("/marketplace"))

        })
    })

    const [user, setUser] = useState<User | undefined>(undefined)

    const [hovered, setHover] = useState(false)

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
            <Flex align="center"> <Button leftIcon={FaGoogle} onClick={login} isDisabled={user !== null}>Log In</Button> <Box paddingX="3" size="2rem" as={FiUserCheck} /></Flex>
            {
                !!user && (
                    <Box>
                        <Text fontSize="2xl">Let's go, {user.displayName}!</Text>
                        <form onSubmit={formik.handleSubmit}>
                            <Flex flexDir="row" wrap="wrap">
                                <Box border="1px" padding={[3, 6, 9, 12]} marginY="2rem" borderRadius="md" borderColor="teal.700">
                                    <Heading fontSize="4xl" fontWeight="thin">Maker Details</Heading>

                                    <FormControl isRequired>
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

                                    <FormControl isRequired>
                                        <Text>What plastics do you have access to?</Text>
                                        <CheckboxGroup value={formik.values.plasticsAvailable} onChange={(values) => formik.setValues({ ...formik.values, plasticsAvailable: values as string[] })} variantColor="teal">
                                            <Checkbox fontFamily="text" value="itachi">PBT</Checkbox>
                                            <Checkbox fontFamily="text" value="madara">ABS</Checkbox>
                                            <Checkbox fontFamily="text" value="kisame">PLA</Checkbox>
                                        </CheckboxGroup>
                                    </FormControl>


                                    {/* </Box>
                                <Box border="1px" padding={[3, 6, 9, 12]} marginY="2rem" marginLeft="2" borderRadius="md" borderColor="teal.700"> */}
                                    <Heading fontSize="4xl" fontWeight="thin">Personal Details</Heading>

                                    <FormControl isRequired>
                                        <Text>Where are you located?</Text>
                                        <Input
                                            isFullWidth={false}
                                            placeholder="ZIP code"
                                            id="location"
                                            name="location"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.location}
                                        />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <Text>How many hours a week are you available?</Text>
                                        <Flex>
                                            <NumberInput
                                                maxW="100px"
                                                mr="2rem"
                                                onChange={(value: any) => formik.setValues({ ...formik.values, timeAvailable: value })}
                                                value={formik.values.timeAvailable}
                                            />
                                            <Slider flex="1" onChange={(value: number) => formik.setValues({ ...formik.values, timeAvailable: value })}
                                                value={formik.values.timeAvailable}>
                                                <SliderTrack />
                                                <SliderFilledTrack />
                                                <SliderThumb
                                                    fontSize="sm"
                                                    width="32px"
                                                    height="20px"
                                                    children={formik.values.timeAvailable}
                                                />
                                            </Slider>
                                        </Flex>
                                    </FormControl>


                                </Box>

                            </Flex>
                            <Box onClick={formik.handleSubmit} border="1px" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} bg={hovered ? "teal.700" : "teal.50"} color={!hovered ? "teal.700" : "teal.50"} borderRadius="md" borderColor="teal.700" padding="0" transition="all 0.1s ease-in" cursor="pointer" maxW="sm" d="flex" alignContent="center" justifyContent="center">
                                <Text fontSize="lg">Submit</Text>

                            </Box>
                        </form>
                    </Box>

                )
            }



        </Box>
    )
}
