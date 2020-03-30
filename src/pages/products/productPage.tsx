import React, { useEffect, useState } from 'react';
import { Badge } from '@chakra-ui/core';
import { docData } from 'rxfire/firestore/dist/firestore';
import { firestore, getProduct } from '../../shared/firebase/firebase';
import { Heading, Text, Box, Link, Divider, Flex, Image } from '@chakra-ui/core';

import { CuttableProduct, PrintableProduct } from '../../models/ppeModels';
export const ProductPage: React.FC<any> = (props: any) => {

    const [product, setProduct] = useState<CuttableProduct | PrintableProduct | null>(null)

    useEffect(() => {
        getProduct(props.match.params.id).subscribe(productData => setProduct(productData))
        // console.log(product)
        console.log(props.match.params.id)
    }, [setProduct, props.match.params.id])

    return (
        <Box>
            <Heading fontSize="6xl">{product?.name}</Heading>
            <Text>Type: {product?.type}</Text>

            <Divider marginY="3" />
            <Flex flexDir="row" wrap="wrap">

                <Box marginX="3">
                    <Text>What is it?</Text>
                    <Heading>Information</Heading>
                    <Text>Plastic type(s):</Text>
                    {
                        product?.plasticType.map(plType => (
                              <Badge fontFamily="text" rounded="full" px="5" variantColor="pink">
                                  {plType.plastic}
                              </Badge>
                          ))
                      }
                    <Text>Original URL: <a href={product?.originalURL}>{product?.originalURL.slice(7, 15)}...</a></Text>
                    <Text>Type: <Badge fontFamily="text" rounded="full" px="5" variantColor="pink">{product?.type}</Badge></Text>
                    <Text>Requires 3D Printed supports: {!!product?.supports}</Text>
                </Box>

                <Box marginX="3" borderRadius="md" >
                    <Text>Let's take a look...</Text>
                    <Heading>Images</Heading>

                    <Flex>
                        {product?.images.map(image => {
                            return (
                                <Box rounded="md" padding="3" marginX="3" bg="teal.700" color="teal.50" maxW="sm" maxH="sm" d="flex" flexDir="column">
                                    <Image src={image} maxW="sm" maxH="sm" />
                                </Box>

                            )
                        })}
                    </Flex>
                </Box>
                <Box>
                    <Heading>Build it</Heading>
                    <Box d="flex" flexDir="row">
                        {product?.downloadURLs.map(url => {
                            return (
                                <Box rounded="md" padding="3" marginX="3" bg="teal.700" color="teal.50" maxW="sm" d="flex" flexDir="column">
                                    <Heading>{url.name}</Heading>
                                    <Text>Format: {url.format}</Text>
                                    <Link href={url.url}>
                                        <Box d="flex" alignItems="center" justifyContent="center" bg="teal.50" color="teal.700" p="4" alignContent="center">
                                            <Text>Download</Text>
                                        </Box>
                                    </Link>
                                </Box>

                            )
                        })}
                    </Box>
                </Box>
                <Box>
                    <Heading>Sterilize it</Heading>
                    <Box d="flex" flexDir="row">
                        {product?.plasticType.map(sterilizeURL => {
                            return (
                                <Box rounded="md" padding="3" marginX="3" bg="teal.700" color="teal.50" maxW="sm" d="flex" flexDir="column">
                                    <Heading>{sterilizeURL.plastic}</Heading>
                                    <Link href={sterilizeURL.sterilization}>
                                        <Box d="flex" alignItems="center" justifyContent="center" bg="teal.50" color="teal.700" p="4" alignContent="center">
                                            <Text>Download</Text>
                                        </Box>
                                    </Link>
                                </Box>

                            )
                        })}
                    </Box>
                </Box>
                <Box>
                  <Heading>Donate it</Heading>
                  <Text>To do: put a link to the "how to donate" page</Text>
                </Box>
            </Flex>
            <Divider marginY="3"/>
        </Box>
    )
}
