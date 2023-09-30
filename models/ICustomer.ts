import { IPerson } from "./IPerson"

export interface ICustomer extends IPerson {
    id: string,
    email: string
}