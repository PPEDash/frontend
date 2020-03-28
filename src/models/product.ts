import { Uri, ID } from './util';
export interface Product {
    name: string
    sources: Uri[]
    id?: ID

}