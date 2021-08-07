import Local from "../Local";
import { IStorage } from "./Storage";
const { DefaultAzureCredential } = require("@azure/identity");
const { BlobServiceClient } = require("@azure/storage-blob");

export class AzureService implements IStorage {
    private client:any;
    constructor(){
        const account = Local.config().azureContainerConn;
        this.client = new BlobServiceClient(
             account,
             DefaultAzureCredential
         );
    }
    async createContainer(container_name: string) {
        console.log(container_name);
        return await this.client.getContainerClient(container_name).create();
    }
    uploadDocument() {
        throw new Error('Method not implemented.');
    }
    DeleteDocument() {
        throw new Error('Method not implemented.');
    }
}