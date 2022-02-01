import {ClientModel} from "./destination-client.model";

export interface TransactionDetailModel {
  originClientRut: string,
  value: number,
  createdAt: Date,
  DestinationObject: ClientModel
}
