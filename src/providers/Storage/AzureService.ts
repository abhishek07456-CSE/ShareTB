import { IStorage } from "./Storage";
const { DefaultAzureCredential } = require("@azure/identity");
const { BlobServiceClient } = require("@azure/storage-blob");

export class AzureService implements IStorage {
    private client:any;
    constructor(){
        this.client = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);
    }
    async createContainer(container_name: string) {
        return await this.client.getContainerClient(container_name).create();
    }
    uploadDocument() {
        throw new Error('Method not implemented.');
    }
    DeleteDocument() {
        throw new Error('Method not implemented.');
    }
}