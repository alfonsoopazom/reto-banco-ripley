import {ClientModel} from "./destination-client.model";

export interface TransactionModel {
   _id: string,
  originClientRut: string
  value: number,
  createdAt: Date,
  DestinationObject: ClientModel
}
