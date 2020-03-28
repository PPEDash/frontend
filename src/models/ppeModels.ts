import { Uri, ID } from './util';

export enum PPETypes {
    FaceMask="FaceMask",

}

export interface PrintableProduct {
    name: string
    healthcareProfessionals: string[]
    images: string[]
    id?: string
    makers: string[]
    originalURL: string
    plasticType: string
    supports: boolean
    type: PPETypes,
    downloadURLs: ({
        format: string
        name: string
        url: string
    })[]
}

export interface CuttableProduct {
    name: string
    healthcareProfessionals: string[]
    images: string[]
    id?: string
    makers: string[]
    originalURL: string
    plasticType: string
    supports: boolean
    type: PPETypes,
    downloadURLs: ({
        format: string
        name: string
        url: string
    })[]
}

export type MarketplaceType = (PrintableProduct | CuttableProduct)[]