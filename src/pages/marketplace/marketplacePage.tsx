import React, { useEffect } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core';
import Typing from 'react-typing-animation';
import { PrintableProduct, CuttableProduct } from '../../models/ppeModels';
import { doc, collectionData } from 'rxfire/firestore';
import { firestore, marketplace } from '../../shared/firebase/firebase';

export const MarketplacePage = () => {

    const [ products, setProducts ] = React.useState<Array<CuttableProduct | PrintableProduct>>([])

    useEffect(() => {
        marketplace.subscribe(values => console.log(values))
        
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
            
        </Box>
    )
}
