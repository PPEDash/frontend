import React, { useEffect } from 'react'
import { Box, Flex, Heading, Text, Divider, Image, Badge, Skeleton, Link as CLink, Tooltip } from '@chakra-ui/core';
import Typing from 'react-typing-animation';
import { PrintableProduct, CuttableProduct, PPETypes } from '../../models/ppeModels';
import { doc, collectionData } from 'rxfire/firestore';
import { firestore, marketplace } from '../../shared/firebase/firebase';
import { FaStar } from 'react-icons/fa';
import { BoxLink } from '../landing/components/boxLink';
import { HeaderNavLink } from '../../shared/components/header/components/navLink';
import { FiLogIn, FiGithub, FiDownload, FiDownloadCloud } from 'react-icons/fi';
import { Link as RLink } from 'react-router-dom';

const Link = CLink as any

export const MarketplacePage = () => {

    const [products, setProducts] = React.useState<Array<CuttableProduct | PrintableProduct>>([])



    useEffect(() => {
        marketplace.subscribe(values => setProducts(values))
    })
    return (
        <Box>
            <Box d="flex" height="35%" flexDirection="column">
                <Flex flexDirection="row" >
                    <Heading fontSize="6xl" fontWeight="thin">The <b>Market</b>
                    </Heading>
                </Flex>
                <Text fontSize="3xl">Find your next project, and the world's next PPE.</Text>
            </Box>

            <Divider marginY="sm" />

            <Flex flexDir="row" flexWrap="wrap" justify="space-between">

                {
                    products.length !== 0 && (
                        products.map((el: PrintableProduct, index, arr) => {
                            return (

                                <Box marginY="3" bg="teal.700" color="teal.50" boxShadow="lg" borderWidth="1px" rounded="lg" d="flex" flexDir="row" overflow="scroll">
                                    <Image src={el.images[0]} maxH="lg" maxW="sm" />

                                    <Box p="6" roundedTop="md">
                                        <Box d="flex" alignItems="baseline">
                                            {
                                                el.plasticType.map(plType => (
                                                    <Badge fontFamily="text" rounded="full" px="5" variantColor="pink">
                                                        {plType}
                                                    </Badge>
                                                ))
                                            }

                                            <Badge marginX="1" fontFamily="text" rounded="full" px="5" variantColor="pink">
                                                {el.type}
                                            </Badge>
                                        </Box>

                                        <Box
                                            mt="1"
                                            fontWeight="semibold"
                                            as="h4"
                                            lineHeight="tight"
                                        // isTruncated
                                        >
                                            <Heading>{el.name}</Heading>
                                            <Text fontWeight="thin">ID: {el.id}</Text>
                                        </Box>

                                        <Box d="flex" mt="2" alignItems="baseline">
                                            <Flex align="center">
                                                <Badge fontFamily="text" rounded="full" px="2" variantColor="pink">
                                                    {el.healthcareProfessionals === undefined ? '0' : el.healthcareProfessionals.length}
                                                </Badge>
                                                <Text>  Healthcare Professionals Waiting</Text>
                                            </Flex>
                                        </Box>

                                        {/* <Tooltip hasArrow placement="bottom" aria-label={"Go"} label={"Go"} fontFamily="Work Sans" bg="teal.300"> */}
                                        <Link as={RLink} to={`/products/${el.id}`}>
                                            <Box d="flex" alignItems="center" justifyContent="center" bg="teal.50" color="teal.700" p="4" alignContent="center">
                                                <Text>Go</Text>
                                            </Box>
                                        </Link>
                                        {/* </Tooltip> */}
                                        {/* <Tooltip hasArrow placement="bottom" aria-label={"Go"} label={"Go"} fontFamily="Work Sans" bg="teal.300">
                                            <CLink href={el.downloadURLs[0].url}>
                                                <Box as={FiDownloadCloud} size="1.5rem" />
                                            </CLink>
                                        </Tooltip> */}
                                    </Box>
                                </Box>

                            )
                        }))
                }

            </Flex>

        </Box>
    )
}
